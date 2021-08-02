import React, { useState, useEffect } from "react";
import MemeCard from "./MemeCard";
import MemeEdit from "./MemeEdit";

const MemeHome = () => {
  const [templates, setTemplates] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editMeme, setEditMeme] = useState();

  useEffect(() => {
    const fetchMemes = async () => {
      var data = await fetch("https://api.imgflip.com/get_memes");
      var jsonData = await data.json();
      var memes = await jsonData.data.memes;
      setTemplates(memes);
    };
    fetchMemes();
  }, []);

  return (
    <>
      {edit ? (
        <MemeEdit meme={editMeme} setEdit={setEdit} />
      ) : (
        <>
          <h1>Meme Generator</h1>
          <div className="memes">
            {templates.map((template) => {
              return (
                <MemeCard
                  key={template.id}
                  template={template}
                  setEdit={setEdit}
                  setEditMeme={setEditMeme}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default MemeHome;
