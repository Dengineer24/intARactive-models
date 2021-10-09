import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy } from "valtio"

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
        mesh_4: THREE.Mesh
        mesh_5: THREE.Mesh
        mesh_6: THREE.Mesh
        mesh_7: THREE.Mesh
        mesh_8: THREE.Mesh
        mesh_9: THREE.Mesh
        mesh_10: THREE.Mesh
        mesh_11: THREE.Mesh
        mesh_12: THREE.Mesh
        mesh_13: THREE.Mesh
        mesh_14: THREE.Mesh
        mesh_15: THREE.Mesh
        mesh_16: THREE.Mesh
        mesh_17: THREE.Mesh
        mesh_18: THREE.Mesh
        mesh_19: THREE.Mesh
        mesh_20: THREE.Mesh
    }
    materials: {
        Spada_1SG: THREE.MeshStandardMaterial
        blinn10SG: THREE.MeshStandardMaterial
        blinn6SG: THREE.MeshStandardMaterial
        lambert11SG: THREE.MeshStandardMaterial
        blinn14SG: THREE.MeshStandardMaterial
        blinn15SG: THREE.MeshStandardMaterial
        blinn3SG: THREE.MeshStandardMaterial
        blinn4SG: THREE.MeshStandardMaterial
        blinn5SG: THREE.MeshStandardMaterial
        initialShadingGroup: THREE.MeshStandardMaterial
        lambert10SG: THREE.MeshStandardMaterial
        lambert2SG: THREE.MeshStandardMaterial
        lambert3SG: THREE.MeshStandardMaterial
        lambert4SG: THREE.MeshStandardMaterial
        typeBlinn1SG: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

// type ActionName = 'Animation'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/f6_boxer_engine/scene.gltf') as GLTFResult
    const [hovered, set] = useState(null)
    console.log(hovered)
    return (
        <group ref={group} {...props} dispose={null}
            //@ts-ignore
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            //@ts-ignore
            onPointerDown={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.mesh_0.geometry} material={materials.Spada_1SG} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials.blinn10SG} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials.blinn6SG} />
                <mesh geometry={nodes.mesh_3.geometry} material={materials.lambert11SG} />
                <mesh geometry={nodes.mesh_4.geometry} material={materials.blinn14SG} />
                <mesh geometry={nodes.mesh_5.geometry} material={materials.blinn15SG} />
                <mesh geometry={nodes.mesh_6.geometry} material={materials.blinn3SG} />
                <mesh geometry={nodes.mesh_7.geometry} material={materials.blinn4SG} />
                <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
                <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
                <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
                <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                <mesh geometry={nodes.mesh_15.geometry} material={materials.initialShadingGroup} />
                <mesh geometry={nodes.mesh_16.geometry} material={materials.lambert10SG} />
                <mesh geometry={nodes.mesh_17.geometry} material={materials.lambert2SG} />
                <mesh geometry={nodes.mesh_18.geometry} material={materials.lambert3SG} />
                <mesh geometry={nodes.mesh_19.geometry} material={materials.lambert4SG} />
                <mesh geometry={nodes.mesh_20.geometry} material={materials.typeBlinn1SG} />
            </group>
        </group>
    )
}

function Details() {
    return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
            <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

            <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/95fa00e3-8d8c-4e25-9143-a31944f68663" alt="Mechanical QR" />
                <a href="https://go.echoar.xyz/FwfR" target="_blank" rel="noreferrer">
                    <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                </a>
            </div>
        </div>
    )
}

export default function F6Boxer() {
    return (
        <>
            <div className="pt-8 bg-ARbg">

                <Link to="/mechanics" className="ml-8">go back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        F6 Boxer
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">A flat-six engine, also known as a horizontally opposed-six, is a six-cylinder piston engine with three cylinders on each side of a central crankshaft. The most common type of flat-six engine is the boxer-six engine, where each pair of opposed cylinders moves inwards and outwards at the same time.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                            <ambientLight intensity={7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.3} />
                                <Environment preset="city" />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                            </Suspense>
                            <OrbitControls autoRotate />
                        </Canvas>
                    </div>

                    <div className="mt-16 md:mt-0 md:col-span-1 p-4">
                        <Details />
                    </div>

                </div>

            </div>

        </>
    )
}
