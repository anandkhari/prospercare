# Prosper Haven CMS — Complete System Report
> Use this document to recreate the exact CMS system in any new project.

---

## 1. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | 16.1.6 |
| UI Library | React | 19.2.3 |
| Database | Supabase (PostgreSQL) | 2.98.0 |
| Auth | Supabase Auth (built-in) | — |
| File Storage | Supabase Storage | — |
| Styling | Tailwind CSS | v4 |
| Animations | Framer Motion | 12.34.3 |
| Carousel | Swiper | 12.1.2 |
| Icons | lucide-react | 0.575.0 |
| Icons (alt) | react-icons | 5.6.0 |

**Not actively used but present:** Firebase (configured, imported, but no calls made in CMS flows)

---

## 2. Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-jwt-key
```

Both are public/client-safe (NEXT_PUBLIC_ prefix). The anon key is used for all operations — no service role key is used anywhere.

---

## 3. Database Schema

### Table: `blog_posts`

```sql
create table blog_posts (
  id          uuid primary key default gen_random_uuid(),
  title       text not null,
  slug        text unique not null,
  excerpt     text,
  content     text,
  cover_image text,
  category    text,
  published   boolean default false,
  created_at  timestamptz default now()
);
```

**Category values (hardcoded in forms):**
- `"activities"` → "Care Home Activities"
- `"career"` → "Healthcare Career Guides"
- `"life"` → "Life in a Care Home"
- `"homes"` → "Select Care Homes"

### Table: `gallery`

```sql
create table gallery (
  id         uuid primary key default gen_random_uuid(),
  url        text not null,
  path       text not null,
  category   text,
  created_at timestamptz default now()
);
```

### Auth
Uses Supabase's built-in `auth.users` table. Admin accounts are created manually in the Supabase dashboard. No custom user table.

---

## 4. Supabase Storage Buckets

| Bucket name | Used for | File path format |
|---|---|---|
| `cms` | Blog cover images | `blog/{timestamp}-{original-filename}` |
| `gallery` | Gallery images | `gallery/{timestamp}-{random-9-char}.{ext}` |

Both buckets must have **public read access** enabled in Supabase dashboard.

---

## 5. Supabase Client Setup

**File:** `src/lib/supabase.js`

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

**Pattern:** Single exported singleton. Imported directly in every file that needs DB/auth/storage. No abstraction layer or custom hooks wrap it.

---

## 6. File & Folder Structure

```
src/
├── app/
│   ├── page.js                          ← Home page
│   ├── about/page.js                    ← About page
│   ├── contact/page.js                  ← Contact page
│   ├── gallery/page.js                  ← Public gallery (SSR)
│   ├── news/
│   │   ├── page.js                      ← News listing with carousel (CSR)
│   │   ├── [slug]/page.js               ← Single blog post (SSR)
│   │   ├── category/[category]/page.js  ← Category filter page (SSR)
│   │   └── components/BlogCard.jsx      ← Blog card component
│   └── admin/
│       ├── layout.js                    ← Auth guard + sidebar shell
│       ├── page.js                      ← Redirects to /admin/blogs
│       ├── login/page.js                ← Login form
│       ├── blogs/
│       │   ├── page.js                  ← Blog list (filter/sort/paginate)
│       │   ├── new/page.js              ← Create post form
│       │   └── [id]/page.js             ← Edit post form
│       └── gallery/
│           └── page.js                  ← Gallery management + upload modal
├── components/
│   ├── layout/
│   │   ├── Navbar.js
│   │   └── Footer.js
│   └── sections/
│       ├── global/
│       │   ├── ContactForm.js
│       │   └── PageHero.js
│       └── pages/
│           └── contact/
│               └── ContactSection.jsx
└── lib/
    ├── supabase.js                      ← Supabase singleton client
    └── firebase.js                      ← Firebase config (unused in CMS)
```

---

## 7. Authentication System

### How it works

**Login page:** `src/app/admin/login/page.js`
- Client component (`"use client"`)
- Form: email + password inputs
- On submit: calls `supabase.auth.signInWithPassword({ email, password })`
- On success: `router.push("/admin")`
- On failure: sets `error` state, shows red error box

```js
const handleLogin = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    setError("Login failed. Please check your credentials.");
    setIsLoading(false);
    return;
  }

  router.push("/admin");
};
```

**Auth guard:** `src/app/admin/layout.js`
- Client component (`"use client"`)
- Runs on every admin route (except `/admin/login`)
- `useEffect` fires on mount:
  1. Detects if current pathname is `/admin/login` — if so, skip auth check
  2. Calls `supabase.auth.getSession()`
  3. If no session: `router.replace("/admin/login")`
  4. If session exists: set `loading = false` (show children)
- Also subscribes to `supabase.auth.onAuthStateChange()` for real-time session updates (handles token expiry)
- Cleans up subscription on unmount via `subscription.unsubscribe()`

```js
useEffect(() => {
  if (isLoginRoute) { setLoading(false); return; }

  let isMounted = true;
  const checkSession = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!isMounted) return;
    if (!session) { router.replace("/admin/login"); }
    else { setLoading(false); }
  };
  checkSession();

  const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
    if (!session) { router.replace("/admin/login"); }
    else { setLoading(false); }
  });

  return () => { isMounted = false; subscription.unsubscribe(); };
}, [isLoginRoute, router]);
```

**Sign out:**
```js
const handleSignOut = async () => {
  await supabase.auth.signOut();
  router.push("/admin/login");
};
```

**Loading state:** While session is being verified, a full-screen teal spinner is shown with "Authenticating_Session" text. The layout never flashes admin UI before auth completes.

---

## 8. Admin Layout & Navigation

**File:** `src/app/admin/layout.js`

Structure:
```
<div class="flex h-screen overflow-hidden">
  <aside class="w-72 bg-white border-r flex-col">
    Logo (img /logo.png)
    <nav>
      NavLink → /admin/gallery  (ImageIcon)
      NavLink → /admin/blogs    (FileText)
    </nav>
    Sign Out button (LogOut icon → handleSignOut)
    Footer: "Prosper Haven CMS  v1.0"
  </aside>
  <main class="flex-1 bg-[#F6FBF8] overflow-auto p-10">
    {children}
  </main>
</div>
```

**NavLink component** (defined in same file, not exported):
- Props: `href`, `icon`, `label`, `active`
- Active state: `bg-[#2BB673] text-white` with `ChevronRight` arrow on right
- Inactive state: `text-gray-600 hover:bg-[#F6FBF8] hover:text-[#2BB673]`
- Active detection: `pathname === "/admin/gallery"` / `pathname === "/admin/blogs"`

---

## 9. Blog Management — Admin Side

### 9A. Blog List Page
**File:** `src/app/admin/blogs/page.js`

**Data fetch** (on mount, client-side):
```js
const { data, error } = await supabase.from("blog_posts").select("*");
```
Fetches ALL posts (no server-side filter). Filtering/sorting/pagination are all done in JavaScript on the client.

**Filter logic:**
```js
const filteredPosts = posts.filter((post) => {
  if (filter === "published") return post.published === true;
  if (filter === "draft")     return post.published === false;
  if (category !== "all" && post.category !== category) return false;
  return true;
});
```

**Sort logic:**
```js
const sortedPosts = [...filteredPosts].sort((a, b) => {
  const aDate = new Date(a.created_at || 0);
  const bDate = new Date(b.created_at || 0);
  return sort === "latest" ? bDate - aDate : aDate - bDate;
});
```

**Pagination:**
- `PAGE_SIZE = 12`
- `totalPages = Math.ceil(sortedPosts.length / PAGE_SIZE)`
- Slice: `sortedPosts.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE)`
- Number buttons rendered: `Array.from({ length: totalPages }).map((_, i) => ...)`

**Delete post:**
```js
const deletePost = async (id) => {
  if (!confirm("Delete this article permanently?")) return;
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) console.error(error);
  setPosts(posts.filter((post) => post.id !== id)); // optimistic UI update
};
```

**Post card:**
- Wrapped in `<Link href="/admin/blogs/{post.id}">`
- 16:10 aspect ratio cover image with `group-hover:scale-105` zoom
- Status badge (Published/Draft) as absolute overlay
- Delete button: absolute top-right, `opacity-0 group-hover:opacity-100`
- `e.preventDefault()` + `e.stopPropagation()` on delete click to prevent nav

**Grid:** `grid-cols-2 md:grid-cols-4 xl:grid-cols-5`

### 9B. Create Blog Post
**File:** `src/app/admin/blogs/new/page.js`

**State:**
```js
const [title, setTitle] = useState("");
const [slug, setSlug] = useState("");
const [excerpt, setExcerpt] = useState("");
const [content, setContent] = useState("");
const [imageFile, setImageFile] = useState(null);
const [published, setPublished] = useState(false);
const [loading, setLoading] = useState(false);
const [category, setCategory] = useState("activities");
```

**Slug auto-generation** (fires on every title keystroke):
```js
const generateSlug = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const handleTitleChange = (e) => {
  const val = e.target.value;
  setTitle(val);
  setSlug(generateSlug(val));
};
```

**Submit flow:**
```js
const handleSubmit = async () => {
  if (!title || !content) { alert("Title and content required"); return; }
  setLoading(true);
  try {
    let imageURL = "";

    // 1. Upload image if provided
    if (imageFile) {
      const filePath = `blog/${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("cms").upload(filePath, imageFile);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("cms").getPublicUrl(filePath);
      imageURL = data.publicUrl;
    }

    // 2. Insert post
    const { error } = await supabase.from("blog_posts").insert([{
      title, slug, excerpt, content,
      cover_image: imageURL, category, published,
    }]);
    if (error) throw error;

    // 3. Redirect
    router.push("/admin/blogs");
  } catch (err) {
    console.error(err);
    alert("Failed to publish post");
  } finally {
    setLoading(false);
  }
};
```

**Form fields:**
1. Title (text input) — triggers slug generation
2. URL Slug (disabled input, read-only, shows auto-generated value)
3. Category (select dropdown)
4. Short Description / Excerpt (textarea, 3 rows)
5. Cover Image (`<input type="file" accept="image/*">`)
6. Article Content (textarea, min-height 320px)
7. Publish checkbox (`accent-[#2BB673]`)

**Footer status text:** Shows "Will be visible on website" if published, "Saved as draft" if not.

### 9C. Edit Blog Post
**File:** `src/app/admin/blogs/[id]/page.js`

**Get the ID:**
```js
const params = useParams();
const postId = useMemo(() => params?.id, [params]);
```

**Fetch on mount:**
```js
const { data, error } = await supabase
  .from("blog_posts").select("*").eq("id", postId).single();
```

**Populates all state fields** with fetched data: `title`, `slug`, `excerpt`, `content`, `cover_image`, `published`.

**Three render states:**
1. `loading === true` → "Loading article..." centered
2. `notFound === true` → Error page with "Back to Articles" button
3. Normal → Edit form

**Update flow:**
```js
const handleSave = async () => {
  if (!title || !content) { alert("Title and content required"); return; }
  setSaving(true);
  try {
    let nextCoverImage = coverImage; // Keep existing image URL by default

    // Upload new image only if user selected one
    if (imageFile) {
      const filePath = `blog/${Date.now()}-${imageFile.name}`;
      const { error: uploadError } = await supabase.storage
        .from("cms").upload(filePath, imageFile);
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from("cms").getPublicUrl(filePath);
      nextCoverImage = data.publicUrl;
    }

    // Update record
    const { error } = await supabase
      .from("blog_posts")
      .update({ title, slug, excerpt, content, cover_image: nextCoverImage, published })
      .eq("id", postId);
    if (error) throw error;

    router.push("/admin/blogs");
  } catch (err) {
    console.error("Failed to update post:", err);
    alert("Failed to update post");
  } finally {
    setSaving(false);
  }
};
```

**Cover image UI:** Shows existing image preview (`max-h-64`) above the file input. Old image is NOT deleted from storage when a new one is uploaded.

---

## 10. Gallery Management — Admin Side

**File:** `src/app/admin/gallery/page.js`

**State:**
```js
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedFiles, setSelectedFiles] = useState([]);
const [isUploading, setIsUploading] = useState(false);
const [galleryItems, setGalleryItems] = useState([]);
const [category, setCategory] = useState("activities");  // for upload batch
const [activeCategory, setActiveCategory] = useState("all"); // for filter view
const fileInputRef = useRef(null);
```

**Fetch gallery** (called on mount + after every upload/delete):
```js
const fetchGallery = async () => {
  const { data, error } = await supabase
    .from("gallery").select("*").order("created_at", { ascending: false });
  if (!error) setGalleryItems(data);
};
```

**Category filter tabs** (dynamically generated from DB data):
```js
const categories = [
  "all",
  ...Array.from(new Set(galleryItems.map((i) => i.category).filter(Boolean))),
];

const filteredItems = activeCategory === "all"
  ? galleryItems
  : galleryItems.filter((i) => i.category === activeCategory);
```

**File selection:**
```js
const handleFileChange = (e) => {
  const files = Array.from(e.target.files);
  const mapped = files.map((file) => ({
    file,
    preview: URL.createObjectURL(file),
    id: Math.random().toString(36).substr(2, 9),
    name: file.name,
  }));
  setSelectedFiles((prev) => [...prev, ...mapped]); // appends, doesn't replace
};
```

**Upload (loops through files sequentially):**
```js
const handleUpload = async () => {
  if (!selectedFiles.length || isUploading) return;
  setIsUploading(true);
  try {
    for (let i = 0; i < selectedFiles.length; i++) {
      const { file } = selectedFiles[i];
      const ext = file.name.split(".").pop();
      const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
      const filePath = `gallery/${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("gallery").upload(filePath, file);
      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);

      await supabase.from("gallery").insert({
        url: data.publicUrl,
        path: filePath,
        category,
        created_at: new Date(),
      });
    }
    setSelectedFiles([]);
    setIsModalOpen(false);
    fetchGallery();
  } finally {
    setIsUploading(false);
  }
};
```

**Delete image** (removes from both storage AND database):
```js
const handleDelete = async (item) => {
  if (!confirm("Delete this image from the gallery?")) return;
  await supabase.storage.from("gallery").remove([item.path]); // storage first
  await supabase.from("gallery").delete().eq("id", item.id);  // then DB record
  fetchGallery(); // re-fetch to sync UI
};
```

**Upload modal:**
- Animated with Framer Motion (`scale: 0.9 → 1`, `opacity: 0 → 1`)
- `AnimatePresence` wrapper for enter/exit
- Backdrop: `fixed inset-0 bg-black/40` — clicking it closes modal
- Drop zone: dashed border, clicking triggers hidden `<input ref={fileInputRef}>`
- Preview grid: `grid-cols-3`, 24px height thumbnails with X button per file
- Upload button disabled when `selectedFiles.length === 0 || isUploading`
- Category select for entire upload batch (one category per upload session)

**Image grid:** `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`, each image `h-56 object-cover`, delete button appears on hover.

---

## 11. Public Blog Pages — Client Side

### 11A. News Listing Page
**File:** `src/app/news/page.js` — Client component (`"use client"`)

**Data fetch (useEffect, client-side):**
```js
const { data, error } = await supabase
  .from("blog_posts")
  .select("*")
  .eq("published", true)         // only published
  .order("created_at", { ascending: false })  // newest first
  .limit(4);                     // only 4 for carousel
```

**Swiper carousel setup:**
```jsx
<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={30}
  slidesPerView={1}
  navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="pb-16 !overflow-visible"
>
```

Navigation uses custom buttons (refs) rather than Swiper's built-in nav. The `onBeforeInit` trick is needed to make custom ref-based buttons work with Swiper.

**Category cards** (static, hardcoded links to category pages):
```js
const categoryCards = [
  { id: "all",        name: "All News",                   icon: Newspaper },
  { id: "activities", name: "Care Home Activities",        icon: Activity },
  { id: "career",     name: "Healthcare Career Guides",   icon: HeartHandshake },
  { id: "life",       name: "Life in a Care Home",        icon: Users },
];
// Links to: /news/category/{cat.id}
```

### 11B. Individual Blog Post Page
**File:** `src/app/news/[slug]/page.js` — Server component (no `"use client"`)

```js
export default async function BlogPost({ params }) {
  const { data: blog } = await supabase
    .from("blog_posts").select("*").eq("slug", params.slug).single();

  if (!blog) return <div>Article not found</div>;

  return (
    <>
      <Navbar />
      <article className="max-w-4xl mx-auto py-20 px-6">
        <h1>{blog.title}</h1>
        <p>{new Date(blog.created_at).toLocaleDateString()}</p>
        <img src={blog.cover_image} className="w-full h-[400px] object-cover rounded-xl mb-12" />
        <div className="prose max-w-none">{blog.content}</div>
      </article>
      <Footer />
    </>
  );
}
```

Content renders as plain text (not HTML). No markdown or rich text parser used.

### 11C. Category Filter Page
**File:** `src/app/news/category/[category]/page.js` — Server component

```js
export default async function CategoryPage({ params }) {
  const { category } = await params;

  let query = supabase
    .from("blog_posts").select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (category !== "all") {
    query = query.eq("category", category);
  }

  const { data: blogs } = await query;
  // ... render grid of BlogCard components
}
```

### 11D. BlogCard Component
**File:** `src/app/news/components/BlogCard.jsx`

```jsx
export default function BlogCard({ blog }) {
  return (
    <div>
      <img src={blog.cover_image} className="w-full h-[240px] object-cover" />
      <h3>{blog.title}</h3>
      <span><Calendar />{new Date(blog.created_at).toLocaleDateString()}</span>
      <Link href={`/news/${blog.slug}`}>
        <button>Read More</button>
      </Link>
    </div>
  );
}
```

### 11E. Public Gallery Page
**File:** `src/app/gallery/page.js` — Server component (SSR)

```js
export default async function GalleryPage() {
  const { data: images } = await supabase
    .from("gallery").select("*").order("created_at", { ascending: false });

  return (
    // grid-cols-2 md:grid-cols-3 lg:grid-cols-4
    // each image: h-60 object-cover
  );
}
```

---

## 12. Data Fetching Patterns — Summary

| Location | Method | Pattern |
|---|---|---|
| Admin blog list | Client component | `useEffect` → `supabase.from().select("*")` |
| Admin gallery | Client component | `useEffect` → `supabase.from().select("*")` |
| Admin edit post | Client component | `useEffect` with `postId` dep → `.select().eq("id",id).single()` |
| Public news page | Client component | `useEffect` → `.select().eq("published",true).limit(4)` |
| Public blog post | Server component | `async` function → `.select().eq("slug",slug).single()` |
| Public category page | Server component | `async` function → conditional `.eq("category",cat)` |
| Public gallery | Server component | `async` function → `.select().order("created_at")` |

---

## 13. Image Upload Pattern

**Blog images (single file):**
```js
const filePath = `blog/${Date.now()}-${imageFile.name}`;
const { error } = await supabase.storage.from("cms").upload(filePath, imageFile);
const { data } = supabase.storage.from("cms").getPublicUrl(filePath);
const imageURL = data.publicUrl;
```

**Gallery images (multiple files, loop):**
```js
const ext = file.name.split(".").pop();
const safeName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
const filePath = `gallery/${safeName}`;
await supabase.storage.from("gallery").upload(filePath, file);
const { data } = supabase.storage.from("gallery").getPublicUrl(filePath);
```

**Delete from storage:**
```js
await supabase.storage.from("gallery").remove([item.path]);
```
Note: Blog images are never deleted from storage when posts are deleted or images replaced.

---

## 14. State Management

No global state (no Redux, no Context API, no Zustand). Everything is local `useState` per component. Lists are re-fetched by calling the fetch function again after mutations.

```
Component mounts → useEffect fetches data → setPosts(data)
User deletes → optimistic: setPosts(posts.filter(...)) OR re-fetch: fetchGallery()
```

Blog admin uses optimistic update (filter from local state).
Gallery admin re-fetches from DB after every change.

---

## 15. Styling System

**Framework:** Tailwind CSS v4 with PostCSS.

**Brand colors (hardcoded as arbitrary values):**
- Primary green: `#2BB673`
- Hover green: `#239a5f`
- Lighter green: `#6ED3A3`
- Teal (loading screen): `#03a696` bg, `#26C6DA` spinner/text
- Admin bg: `#F6FBF8`
- Dark footer: `#0A0A0A`

**Consistent pattern across forms:**
- Input focus: `focus:border-[#2BB673] focus:outline-none`
- Submit buttons: `bg-[#2BB673] hover:bg-[#239a5f] disabled:opacity-60`
- File input styled: `file:bg-[#2BB673] file:text-white file:border-0 file:px-5 file:py-2 file:rounded-md`
- Checkbox accent: `accent-[#2BB673]`

**Admin sidebar active state:** `bg-[#2BB673] text-white shadow-sm` + ChevronRight icon.

---

## 16. Routing Structure

```
/                         → Home
/about                    → About page
/contact                  → Contact page
/gallery                  → Public gallery (SSR)
/news                     → News listing (CSR, Swiper carousel)
/news/[slug]              → Single blog post (SSR)
/news/category/[category] → Category filter (SSR)
/admin                    → Redirects to /admin/blogs
/admin/login              → Login page (no auth guard)
/admin/blogs              → Blog list/manage
/admin/blogs/new          → Create post
/admin/blogs/[id]         → Edit post
/admin/gallery            → Gallery manage
```

---

## 17. Next.js Config

**File:** `next.config.mjs`
```js
// Allows remote images from pexels.com to be optimized by next/image
remotePatterns: [{ hostname: "images.pexels.com" }]
```

**File:** `jsconfig.json`
```json
{ "compilerOptions": { "paths": { "@/*": ["./src/*"] } } }
```
Path alias `@/` maps to `src/`. Used everywhere as `import { supabase } from "@/lib/supabase"`.

---

## 18. What the CMS Does NOT Have

Understanding these gaps helps when rebuilding with improvements:

1. **No rich text editor** — content is plain text textarea; no WYSIWYG, no Markdown rendering
2. **No API routes** — all Supabase calls are direct from client/server components; no `/api/*` abstraction
3. **No form validation library** — only `if (!title || !content) alert(...)` style checks
4. **No image deletion on post delete** — orphaned images remain in storage
5. **No image optimization** — uses `<img>` not `<next/image>` in most places
6. **No contact form backend** — the contact forms have no submission handler
7. **No error boundary** — no React error boundaries
8. **No middleware** — no `middleware.js` for route-level auth (relies on layout-level check instead)
9. **No slug editing** — slug is locked after creation (shown as disabled field in edit)
10. **No category for gallery in upload modal** — only a hardcoded `"activities"` default shown; the select for category in the modal was not included in the final UI (only the `category` state and DB field exist)

---

## 19. Step-by-Step Rebuild Checklist

To recreate this exact CMS in a new project:

### Supabase Setup
- [ ] Create Supabase project
- [ ] Run SQL to create `blog_posts` table (schema in section 3)
- [ ] Run SQL to create `gallery` table (schema in section 3)
- [ ] Create storage bucket `cms` (public)
- [ ] Create storage bucket `gallery` (public)
- [ ] Create admin user in Supabase Auth dashboard

### Next.js Project
- [ ] `npx create-next-app@latest` with App Router
- [ ] Install: `@supabase/supabase-js framer-motion swiper lucide-react react-icons`
- [ ] Add env vars to `.env.local`
- [ ] Add path alias `@/*` to `jsconfig.json`
- [ ] Create `src/lib/supabase.js` (section 5)

### Admin
- [ ] `src/app/admin/layout.js` — auth guard + sidebar (section 7 + 8)
- [ ] `src/app/admin/login/page.js` — login form (section 7)
- [ ] `src/app/admin/blogs/page.js` — blog list with filter/sort/paginate (section 9A)
- [ ] `src/app/admin/blogs/new/page.js` — create form with slug gen + image upload (section 9B)
- [ ] `src/app/admin/blogs/[id]/page.js` — edit form with image replace (section 9C)
- [ ] `src/app/admin/gallery/page.js` — gallery with modal upload + delete (section 10)

### Public Pages
- [ ] `src/app/gallery/page.js` — SSR gallery grid (section 11E)
- [ ] `src/app/news/page.js` — CSR news + Swiper carousel (section 11A)
- [ ] `src/app/news/[slug]/page.js` — SSR single post (section 11B)
- [ ] `src/app/news/category/[category]/page.js` — SSR category filter (section 11C)
- [ ] `src/app/news/components/BlogCard.jsx` — reusable card (section 11D)
