import React, { useState } from 'react';

export default function SocialMediaPosts() {
  const [caption, setCaption] = useState('');
  return (
    <div>
      <h1>Social Media Caption Hub</h1>
      <form>
        <input
          type="checkbox"
          id="Instagram"
          name="platform"
          value="Instagram"
        />
        <label for="Instagram">Instagram</label>
        <input type="checkbox" id="Tik Tok" name="platform" value="Tik Tok" />
        <label for="Tik Tok">Tik Tok</label>
        <input type="text" id="artist" name="artist" />
        <input type="text" id="artist" name="artist" />
      </form>
    </div>
  );
}
