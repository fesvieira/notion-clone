import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";

import "highlight.js/styles/atom-one-dark.css";

const lowlight = createLowlight();

lowlight.register("js", js);

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    content: "<p>Hello World! 🌎️</p>",
  });

  return (
    <>
      <EditorContent editor={editor} />
      {editor && (
        <BubbleMenu editor={editor}>
          <button>Bold</button>
        </BubbleMenu>
      )}
    </>
  );
};

export default Tiptap;
