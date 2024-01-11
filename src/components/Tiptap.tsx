import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from "react-icons/rx";
import "highlight.js/styles/atom-one-dark.css";
import { BubbleButton, StyledBubbleMenu } from "@/styles/Home";

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
    <div>
      <EditorContent editor={editor} />
      {editor && (
        <StyledBubbleMenu editor={editor}>
          <BubbleButton>
            Aoba
            <RxChevronDown />
          </BubbleButton>

          <BubbleButton>
            Comment
            <RxChatBubble />
          </BubbleButton>

          <BubbleButton
            isActive={editor.isActive("bold")}
            onClick={() => editor.chain().focus().toggleBold().run()}
          >
            <RxFontBold />
          </BubbleButton>

          <BubbleButton
            isActive={editor.isActive("italic")}
            onClick={() => editor.chain().focus().toggleItalic().run()}
          >
            <RxFontItalic />
          </BubbleButton>

          <BubbleButton
            isActive={editor.isActive("strike")}
            onClick={() => editor.chain().focus().toggleStrike().run()}
          >
            <RxStrikethrough />
          </BubbleButton>

          <BubbleButton
            isActive={editor.isActive("codeblock")}
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          >
            <RxCode />
          </BubbleButton>
        </StyledBubbleMenu>
      )}
    </div>
  );
};

export default Tiptap;
