import { useEffect, useState } from "react"
import * as img from "../img/img.js"
import { useKeyboard } from "../hooks/useKeyboard.js"
import { useStore } from "../hooks/useStore.js"

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [texture, setTexture] = useStore(state => [state.texture, state.setTexture])
  
    const {
        dirt,
        grass,
        glass,
        wood
    } = useKeyboard()
    
    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false)
        }, 2000)
      
        setVisible(true);
        return () => {
            clearTimeout(visibilityTimeout)
        }
  
    }, [texture]);



    useEffect(() => {
        const options = {
            dirt,
            grass,
            glass,
            wood
        }
        
        const selectedTexture = Object
            .entries(options)
            .find(([texture, isEnable]) => isEnable)
        if (selectedTexture) {
            const [textureName] = selectedTexture
            setTexture(textureName)
        }
        
    }, [dirt, grass, glass, wood])
   
    
    return (
        <div className={visible  ? "texture-selector" : "none"}>
            {
                Object.entries(img).map(([imgKey, imgTexture]) => {
                    return (
                        <img
                        className={texture === imgKey.replace("Img", "") ? "selected" : ""}
                        key={imgKey}
                        src={imgTexture}
                        alt={imgKey}
                      />
                    );
                })
            }
        </div>
    )
}

