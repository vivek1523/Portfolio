import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import { useEffect } from 'react'
import * as THREE from 'three'

const TechIcons = ({ model }) => {
  const Scene = useGLTF(model.modelPath);

  useEffect(()=> {
    if(model.name === "Interactive Developer") {
        Scene.scene.traverse((child)=>{
          if(child.isMesh && child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: 'white' })
          }
        })
    }
  })

  return (
    <Canvas>
        <ambientLight intensity={0.3}/>
        <directionalLight position={[5,5,5]} intensity={1}/>

        <Environment preset='city'/>

        <OrbitControls enableZoom={false}/>

        <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
           <group scale={model.scale} rotation={model.rotation}>
             <primitive object={Scene.scene}/> 
           </group> 
        </Float> 
    </Canvas>
  )
}

export default TechIcons