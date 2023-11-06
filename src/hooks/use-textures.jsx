import { useTexture } from '@react-three/drei'

const useTextures = (name) => {

    const base = useTexture({
        map: './textures/leathers/default/base_color.jpg',
        displacementMap: './textures/leathers/default/height.png',
        normalMap: './textures/leathers/default/normal.jpg',
        roughnessMap: './textures/leathers/default/roughness.jpg',
        aoMap: './textures/leathers/default/ambient_occlusion.jpg',
    });

    const armor = useTexture({
        map: './textures/leathers/armor/base_color.jpg',
        displacementMap: './textures/leathers/armor/height.png',
        normalMap: './textures/leathers/armor/normal.jpg',
        roughnessMap: './textures/leathers/armor/roughness.jpg',
        aoMap: './textures/leathers/armor/ambient_occlusion.jpg',
    });

    const diamon = useTexture({
        map: './textures/leathers/diamon/base_color.jpg',
        displacementMap: './textures/leathers/diamon/height.png',
        normalMap: './textures/leathers/diamon/normal.jpg',
        roughnessMap: './textures/leathers/diamon/roughness.jpg',
        aoMap: './textures/leathers/diamon/ambient_occlusion.jpg',
    });

    const padded = useTexture({
        map: './textures/leathers/padded/base_color.jpg',
        displacementMap: './textures/leathers/padded/height.png',
        normalMap: './textures/leathers/padded/normal.jpg',
        roughnessMap: './textures/leathers/padded/roughness.jpg',
        aoMap: './textures/leathers/padded/ambient_occlusion.jpg',
    });

    const weave = useTexture({
        map: './textures/leathers/weave/base_color.jpg',
        displacementMap: './textures/leathers/weave/height.png',
        normalMap: './textures/leathers/weave/normal.jpg',
        roughnessMap: './textures/leathers/weave/roughness.jpg',
        aoMap: './textures/leathers/weave/ambient_occlusion.jpg',
    });

    const green = useTexture({
        map: './textures/leathers/green/base_color.jpg',
        displacementMap: './textures/leathers/green/height.png',
        normalMap: './textures/leathers/green/normal.jpg',
        roughnessMap: './textures/leathers/green/roughness.jpg',
        aoMap: './textures/leathers/green/ambient_occlusion.jpg',
    })

    const data = {
        base,
        armor,
        diamon,
        padded,
        weave,
        green
    }

    return data[name];
}

export default useTextures;