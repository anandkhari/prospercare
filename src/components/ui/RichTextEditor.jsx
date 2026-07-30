"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { useEffect, useState, useCallback } from "react";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo,
  Redo,
  Link as LinkIcon,
  Unlink,
  Image as ImageIcon,
} from "lucide-react";

export default function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Write your article content here...",
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#14B8A6] underline cursor-pointer",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg max-w-full my-4",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-teal max-w-none p-4 focus:outline-none min-h-[300px] text-gray-700 font-sans",
      },
    },
    immediatelyRender: false,
  });

  // Sync internal editor content if initial value arrives asynchronously (e.g. edit mode)
  useEffect(() => {
    if (editor && value !== undefined && editor.getHTML() !== value) {
      // Only set content if it's different and non-empty or fresh load
      const currentHTML = editor.getHTML();
      if (currentHTML === "<p></p>" || (value && currentHTML !== value)) {
        editor.commands.setContent(value, false);
      }
    }
  }, [value, editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL:", previousUrl);

    if (url === null) return; // cancelled

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url })
      .run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("Enter image URL:");
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!isMounted || !editor) {
    return (
      <div className="w-full border border-gray-200 rounded-xl p-4 min-h-[350px] bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
        Loading Rich Text Editor...
      </div>
    );
  }

  return (
    <div className="w-full border border-gray-200 rounded-xl overflow-hidden bg-white focus-within:border-[#2BB673] focus-within:ring-1 focus-within:ring-[#2BB673] transition-all">
      {/* TOOLBAR */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-gray-50 border-b border-gray-200 text-gray-600">
        {/* Headings */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("heading", { level: 1 })
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Heading 1"
        >
          <Heading1 size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("heading", { level: 2 })
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Heading 2"
        >
          <Heading2 size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("heading", { level: 3 })
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Heading 3"
        >
          <Heading3 size={17} />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("bold")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Bold"
        >
          <Bold size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("italic")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Italic"
        >
          <Italic size={17} />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Lists */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("bulletList")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Bullet List"
        >
          <List size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("orderedList")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Ordered List"
        >
          <ListOrdered size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("blockquote")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Blockquote"
        >
          <Quote size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("codeBlock")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Code Block"
        >
          <Code size={17} />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* Links & Images */}
        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded hover:bg-gray-200 transition-colors ${
            editor.isActive("link")
              ? "bg-[#2BB673]/10 text-[#2BB673] font-bold"
              : ""
          }`}
          title="Insert Link"
        >
          <LinkIcon size={17} />
        </button>

        {editor.isActive("link") && (
          <button
            type="button"
            onClick={() => editor.chain().focus().unsetLink().run()}
            className="p-2 rounded hover:bg-gray-200 transition-colors text-red-500"
            title="Remove Link"
          >
            <Unlink size={17} />
          </button>
        )}

        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded hover:bg-gray-200 transition-colors"
          title="Insert Image URL"
        >
          <ImageIcon size={17} />
        </button>

        <div className="w-px h-5 bg-gray-300 mx-1" />

        {/* History */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-30"
          title="Undo"
        >
          <Undo size={17} />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="p-2 rounded hover:bg-gray-200 transition-colors disabled:opacity-30"
          title="Redo"
        >
          <Redo size={17} />
        </button>
      </div>

      {/* EDITOR CONTENT CANVAS */}
      <EditorContent editor={editor} />
    </div>
  );
}
