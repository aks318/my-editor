import React, { useState } from "react";
import "@mdxeditor/editor/style.css";

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  Button,
  ListsToggle,
  MDXEditor,
  Separator,
  UndoRedo,
  headingsPlugin,
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
          listsPlugin(),
          headingsPlugin(),
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
                <ListsToggle options={["number", "bullet"]} />
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
        ]}
      />
    </div>
  );
};

export default MyEditor;
