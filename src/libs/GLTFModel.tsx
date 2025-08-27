import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Scene, Object3D, Mesh, MeshStandardMaterial, SRGBColorSpace } from 'three';

export function loadGLTFModel(
  scene: Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) {
  const { receiveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      gltf => {
        const obj = gltf.scene;
        obj.name = 'surfkitty';
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        // Force the original material colors to appear exactly as before
        obj.traverse(function(child: Object3D) {
          if (child.type === 'Mesh') {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
            
            // Maximize color vibrancy (matching reference image)
            const mesh = child as Mesh;
            if (mesh.material) {
              // Handle both single and array of materials
              const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
              
              materials.forEach(material => {
                // Check if it's a MeshStandardMaterial
                if ('metalness' in material) {
                  const stdMaterial = material as MeshStandardMaterial;
                  
                  // Set values for maximum color vibrancy
                  stdMaterial.metalness = 0.0;      // No metalness for pure colors
                  stdMaterial.roughness = 0.2;      // Lower roughness for vibrant colors
                  stdMaterial.envMapIntensity = 0;  // Disable environment reflections
                  
                  // Boost color saturation
                  if (stdMaterial.color) {
                    const color = stdMaterial.color;
                    // Enhance existing colors without changing hue
                    color.r = Math.min(1.0, color.r * 1.2);
                    color.g = Math.min(1.0, color.g * 1.2);
                    color.b = Math.min(1.0, color.b * 1.2);
                  }
                }
              });
            }
          }
        });
        resolve(obj);
      },
      undefined,
      function(error) {
        reject(error);
      }
    );
  });
}