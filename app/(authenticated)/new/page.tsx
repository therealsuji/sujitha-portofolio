import { Tiptap } from "@/components/tiptap/TipTap";
import React from "react";

const NewBlog = () => {
  return (
    <Tiptap
      content={"<p>Hello World! 🌍️</p>"}
      withToolbar={true}
      withTaskListExtension={true}
      withLinkExtension={true}
      withCodeBlockLowlightExtension={true}
      withEmojiSuggestion={true}
      withTypographyExtension={true}
      withHexColorsDecorator={true}
      withEmojisReplacer={true}
    />
  );
};

export default NewBlog;
