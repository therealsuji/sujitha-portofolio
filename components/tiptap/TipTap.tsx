"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Typography from "@tiptap/extension-typography";
import Link from "@tiptap/extension-link";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import Placeholder from "@tiptap/extension-placeholder";
import {
  HyperMultimediaKit,
  audioModal,
  imageModal,
  soundCloudModal,
  youtubeModal,
  videoModal,
  twitterModal,
  vimeoModal,
} from "@docs.plus/extension-hypermultimedia";

import type { Extensions } from "@tiptap/react";

import { common, createLowlight } from "lowlight";

const lowlight = createLowlight(common);
import { HexColorDecorator } from "./extensions";
import { formatHtml } from "./helpers";

import { Toolbar } from "./Toolbar";
import { Popover } from "./Popover";

import "./Tiptap.scss";
import "./HyperMultiMedia.scss";

type TiptapProps = {
  content?: string;
  editable?: boolean;
  placeholder?: string;
  withToolbar?: boolean;
  withPopover?: boolean;
  withTypographyExtension?: boolean;
  withLinkExtension?: boolean;
  withCodeBlockLowlightExtension?: boolean;
  withTaskListExtension?: boolean;
  withPlaceholderExtension?: boolean;
  withEmojiSuggestion?: boolean;
  withEmojisReplacer?: boolean;
  withHexColorsDecorator?: boolean;
};

function Tiptap({
  content = "",
  editable = true,
  placeholder = "Type '/' for actions…",
  withToolbar = false,
  withPopover = false,
  withTypographyExtension = false,
  withLinkExtension = false,
  withCodeBlockLowlightExtension = false,
  withTaskListExtension = false,
  withPlaceholderExtension = false,
  withHexColorsDecorator = false,
}: TiptapProps) {
  const extensions: Extensions = [
    StarterKit.configure({
      ...(withCodeBlockLowlightExtension && { codeBlock: false }),
    }),
  ];

  if (withTypographyExtension) {
    extensions.push(Typography);
  }

  if (withLinkExtension) {
    extensions.push(
      Link.configure({
        linkOnPaste: false,
        openOnClick: false,
      })
    );
  }

  if (withCodeBlockLowlightExtension) {
    extensions.push(
      CodeBlockLowlight.configure({
        lowlight,
      })
    );
  }

  if (withTaskListExtension) {
    extensions.push(TaskList, TaskItem);
  }

  if (withPlaceholderExtension) {
    extensions.push(
      Placeholder.configure({
        placeholder,
      })
    );
  }

  if (withHexColorsDecorator) {
    extensions.push(HexColorDecorator);
  }

  extensions.push(
    HyperMultimediaKit.configure({
      Image: {
        modal: imageModal,
        inline: true,
      },
      Video: {
        modal: videoModal,
        inline: true,
      },
      Audio: {
        modal: audioModal,
        inline: true,
      },
      Youtube: {
        modal: youtubeModal,
        inline: true,
      },
      Vimeo: {
        modal: vimeoModal,
        inline: true,
      },
      SoundCloud: {
        modal: soundCloudModal,
        inline: true,
      },
      Twitter: {
        modal: twitterModal,
        inline: true,
        theme: "dark",
      },
    })
  );

  const [editorHtmlContent, setEditorHtmlContent] = React.useState(
    content.trim()
  );

  const editor = useEditor({
    content,
    extensions,
    editable,
    onUpdate: ({ editor }) => {
      setEditorHtmlContent(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="WhiteCard">
        {withToolbar ? <Toolbar editor={editor} /> : null}
        {withPopover ? <Popover editor={editor} /> : null}
        <EditorContent editor={editor} />
      </div>
      <hr />
      <h2>HTML Output</h2>
      <div className="WhiteCard">
        <pre>{formatHtml(editorHtmlContent)}</pre>
      </div>
    </>
  );
}

export { Tiptap };
