import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
