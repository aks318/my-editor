import React, { useState } from "react";
import "@mdxeditor/editor/style.css";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  Button,
  CreateLink,
  InsertImage,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  headingsPlugin,
  imagePlugin,
  linkDialogPlugin,
  linkPlugin,
  listsPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";

const MyEditor = () => {
  const initialVal = localStorage.getItem("markDown") ?? "";
  const [markDown, setMarkDown] = useState(initialVal);

  const handleSave = () => {
    localStorage.setItem("markDown", markDown);
  };

  return (
    <div>
      <MDXEditor
        markdown={markDown}
        onChange={(v) => setMarkDown(v)}
        className="Editable"
        placeholder="Editable Area"
        plugins={[
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <UndoRedo />
                <Separator />
                <BoldItalicUnderlineToggles />
                <Separator />
                <BlockTypeSelect />
                <Separator />
                <ListsToggle />
                <Separator />
                <CreateLink />
                <InsertImage />
                <Separator />
                <Button
                  onClick={handleSave}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "grey",
                    color: "white",
                    padding: "4px 8px",
                  }}
                >
                  Save
                </Button>
              </>
            ),
          }),
          listsPlugin(),
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin({
            linkAutocompleteSuggestions: [
              "https://virtuoso.dev",
              "https://mdxeditor.dev",
            ],
          }),
          imagePlugin({
            imageUploadHandler: () => {
              return Promise.resolve("https://picsum.photos/200/300");
            },
            imageAutocompleteSuggestions: [
              "https://picsum.photos/200/300",
              "https://picsum.photos/200",
            ],
          }),
        ]}
      />
    </div>
  );
};

export default MyEditor;
