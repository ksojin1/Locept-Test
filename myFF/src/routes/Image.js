
function UserMap() {

  return (
    <div className="UserMap">
      <input type='file' accept="image/*"
        onChange={saveImage}
        onClick={(e) => e.target.value = null}
        ref={refParam => inputRef = refParam}
        style={{display: 'none'}}
      />

      <div>
        <img src={image.preview_URL}/>
      </div>

      <div>
        <button onClick={() => inputRef.click()}>Preview</button>
        <button onClick={deleteImage}>Delete</button>
        <button onClick={sendImageToServer}>Upload</button>
      </div>
    </div>
  );
}

export default UserMap;
