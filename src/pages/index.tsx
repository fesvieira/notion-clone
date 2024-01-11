import Tiptap from "@/components/Tiptap";
import {
  NotionWindow,
  SideBar,
  SideButton,
  SideButtonsRow,
  TextContainer,
} from "@/styles/Home";
import { Row } from "@/styles/global";
import BubbleMenu from "@tiptap/extension-bubble-menu";

export default function Home() {
  return (
    <NotionWindow>
      <SideBar>
        <SideButtonsRow>
          <SideButton background="#f18888" />
          <SideButton background="#facc15" />
          <SideButton background="#4ade80" />
        </SideButtonsRow>
      </SideBar>

      {
        // editores
        // prose mirror
        // editor js
        // block suite
        // remirror
        // tip tap !!!
      }

      <main>
        <TextContainer>
          <Tiptap />
        </TextContainer>
      </main>
    </NotionWindow>
  );
}
