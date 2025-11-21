import React, { Component } from "react";

class Aboutme extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginLeft: 'auto', color: '#fff', marginRight: 'auto', marginTop: '100px', width: '60%', background: 'gray', padding: '20px'}}>
        <h1 style={{fontSize: '50px', textTransform: 'uppercase', fontFamily: 'Anton, sans-serif'}}>Ismael Miah</h1>
        <p style={{textAlign: 'justify', fontFamily: 'Oxygen, sans-serif'}}>
           Hi, This is <strong>Kalpana Kommana</strong>, a <strong>Full Stack Developer</strong>. I enjoy building websites and 
        applications that are both useful and easy to use. I do have experience with AI worked on LLM Integrations and also used 
        multiple AI tools. I am a hardworking and curious person who loves solving real-world problems with code. Being worked 
        for different projects helped me to adapt to the changes quickly and made me a good team worker.I dream to be an expert 
        software engineer so that I can build professional and useful software that has great business value.
        </p>
      </div>
    );
  }
}

export default Aboutme;