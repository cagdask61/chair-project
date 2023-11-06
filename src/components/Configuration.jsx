import { useState } from "react";

import textures from '../data/textures';
import useCameraStore from "../store/use-camera-store";
import useTextureStore from "../store/use-texture-store";

const Configuration = () => {

    const cameraState = useCameraStore();
    const textureState = useTextureStore();
    const [active, setActive] = useState(false);

    function textureStateChange(key) {
        textureState.change(key)
        window.location.reload()
    }
    return (
        <>
            {active ? (
                <div className="fixed top-0 right-0 w-72 h-full bg-black/50 z-50 backdrop-blur">
                    <button onClick={() => setActive(false)} className="absolute right-0 bg-white/5 hover:bg-white/10 rounded-bl-xl p-2 flex items-center justify-center">
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 6h2v12h-2zM4 13h8.586l-4.293 4.293 1.414 1.414L16.414 12 9.707 5.293 8.293 6.707 12.586 11H4z"></path></svg>
                    </button>
                    <h2 className="text-center text-white text-3xl pt-2">Ayarlar</h2>
                    <div className="w-full h-full flex flex-col gap-y-5 items-center">
                        <div className="flex flex-col gap-y-2 bg-white/10 rounded p-3 mt-5">
                            <span className="text-white text-center text-sm">Yakınlık/Uzaklık</span>
                            <div className="w-32 h-10 flex flex-row items-center justify-around rounded">
                                <button onClick={() => cameraState.zoomIn()} className="bg-white/10 hover:bg-white/20 active:bg-white/5 rounded-l w-full h-full flex items-center justify-center">
                                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z"></path><path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path></svg>
                                </button>
                                <button onClick={() => cameraState.zoomOut()} className="bg-white/10 hover:bg-white/20 active:bg-white/5 rounded-r w-full h-full flex items-center justify-center">
                                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 9h8v2H6z"></path><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 bg-white/10 rounded p-3">
                            <span className="text-white text-center text-sm">Dokular</span>
                            <div className="grid grid-cols-12 gap-3">
                                {textures.map((texture) => (
                                    <button key={texture.key} onClick={() => textureStateChange(texture.key)} className={"w-14 h-14 col-span-4 rounded-full hover:outline hover:outline-1 hover:outline-white " + (textureState.key === texture.key ? "outline outline-2 outline-white" : "")}>
                                        <img draggable={false} className="object-cover rounded-full w-full h-full" src={texture.material} alt={texture.title} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <button onClick={() => setActive(true)} className="z-50 absolute right-0 bg-white/10 hover:bg-white/20 rounded-bl-xl p-2 flex items-center justify-center">
                    <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6h2v12H4zm10.293-.707L7.586 12l6.707 6.707 1.414-1.414L11.414 13H20v-2h-8.586l4.293-4.293z"></path></svg>
                </button>
            )}
        </>
    )
}

export default Configuration;