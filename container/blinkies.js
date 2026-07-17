<div class="blinkie-shelf">
  <div class="shelf-title">BLINKIES</div>
  
  <div class="blinkie-container">
    <img src="https://adriansblinkiecollection.neocities.org/e116.gif" />
    <img src="URL DEL BLINK" />
  </div>
  
  <div class="shelf-footer">HOLA</div>
</div>

<style>
  .blinkie-shelf {
    background: #fffdf5 !important;
    border: 2px dashed rgb(140, 51, 51) !important;
    padding: 15px 10px 15px 15px; 
    border-radius: 10px;
    text-align: center;
    max-width: 280px;
    margin: 10px auto;
    box-shadow: 4px 4px 0px rgba(0,0,0,0.05);
    box-sizing: border-box;
  }

  .shelf-title {
    font-family: 'Courier New', monospace !important;
    font-size: 13px !important;
    font-weight: bold;
    color: rgb(140, 51, 51) !important;
    margin-bottom: 12px;
    border-bottom: 1px solid rgba(140, 51, 51, 0.1);
    padding-bottom: 5px;
  }

  .blinkie-container {
    display: flex;
    flex-wrap: wrap; 
    gap: 8px; 
    justify-content: center;
    padding: 5px 8px 5px 5px; 
    box-sizing: border-box;
    max-height: 165px; 
    overflow-y: auto;  
    scrollbar-width: thin; 
    scrollbar-color: rgb(140, 51, 51) transparent;
  }

  .blinkie-container::-webkit-scrollbar {
    width: 4px; 
  }
  
  .blinkie-container::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .blinkie-container::-webkit-scrollbar-thumb {
    background: rgb(140, 51, 51);
    border-radius: 10px;
  }

  .blinkie-container img {
    image-rendering: pixelated; 
    height: 23px !important; 
    width: auto;
    transition: transform 0.2s;
    display: block;
  }

  .blinkie-container img:hover {
    transform: scale(1.08);
    cursor: help;
  }

  .shelf-footer {
    font-family: 'Courier New', monospace !important;
    font-size: 11px !important;
    color: rgb(132, 153, 79) !important;
    margin-top: 12px;
    opacity: 0.8;
  }
</style>
