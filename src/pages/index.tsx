import Tiptap from "@/components/Tiptap";
import {
  NotionWindow,
  SideBar,
  SideButton,
  SideButtonsRow,
  TextContainer,
} from "@/styles/Home";

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

      <main>
        <TextContainer>
          <Tiptap />
        </TextContainer>
      </main>
    </NotionWindow>
  );
}
