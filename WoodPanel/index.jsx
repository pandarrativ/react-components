import { useState } from "react";

import WoodPanel from "../../components/WoodPanel/WoodPanel";

function ExamplePage() {
    const [showPanel, setShowPanel] = useState(true);
    const [woodPanelValue, setWoodPanelValue] = useState("");
    const handleWoodSend = () => {
        // your code for click on send button of wood panel
    }
    

    const renderWoodPanel = () => {
        return (
            showPanel? (
                <div id="wood-panel-block-conversation" className={shift === 0 ? 'wood-slide-up' : 'wood-slide-down'}>
                    <WoodPanel value={woodPanelValue} onValueChange={setWoodPanelValue} onClickSend={handleWoodSend}></WoodPanel>
                </div>
            )
            :
            (
                ""
            )
        );
    }


    return ( 
        <div className="your-page">
            {/* 
                Your page elements
            */}
            
            {renderWoodPanel()}
        </div>
     );
}

export default ExamplePage;