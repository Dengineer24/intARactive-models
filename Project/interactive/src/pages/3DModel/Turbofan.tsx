import React, { Suspense, useRef, useState } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"
import { proxy, useSnapshot } from "valtio"

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
    }
    materials: {
        ['metal-bright']: THREE.MeshStandardMaterial
        ['plastic-cone-black']: THREE.MeshStandardMaterial
        ['plastic-grey']: THREE.MeshStandardMaterial
        ['accent-yellow']: THREE.MeshStandardMaterial
        ['metal-dark']: THREE.MeshStandardMaterial
        ['metal-mid']: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

// type ActionName = 'Animation'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/turbine__turbofan_engine__jet_engine/scene.gltf') as GLTFResult
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
                <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                <mesh geometry={nodes.mesh_1.geometry} material={materials['plastic-cone-black']} />
                <mesh geometry={nodes.mesh_2.geometry} material={materials['plastic-grey']} />
                <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
                <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
                <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
                <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
                <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
                <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
                <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
                <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "metal-mid") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Fan</h1>
                <p className="text-xl text-justify">The turbines are linked by a shaft to turn the blades in the compressor and to spin the intake fan at the front. This rotation takes some energy from the high-energy flow that is used to drive the fan and the compressor.</p>
            </div>
        )
    }
    else if (snap.current === "metal-bright") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Nozzle</h1>
                <p className="text-xl text-justify">All gas turbine engines have a nozzle to produce thrust, to conduct the exhaust gases back to the free stream, and to set the mass flow rate through the engine. The nozzle sits downstream of the power turbine.</p>
            </div>
        )
    }
    else if (snap.current === "plastic-grey") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">High Pressure Compressor</h1>
                <p className="text-xl text-justify">In a turbojet (zero-bypass) engine the high temperature and high pressure exhaust gas is accelerated by expansion through a propelling nozzle and produces all the thrust. The compressor absorbs all the mechanical power produced by the turbine. In a bypass design extra turbines drive a ducted fan that accelerates air rearward from the front of the engine.</p>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">Click on different parts of Turbofan to know more.</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid place-item-center">
                    <img className="block p-6 text-6xl rounded-xl h-48 min-w-48" src="https://storage.echoar.xyz/wispy-violet-4999/aa0d5fab-ee55-4e17-a85e-63e46c5310ba" alt="Mechanical QR" />
                    <a href="https://go.echoar.xyz/8Pzf" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function Turbofan() {
    return (
        <>
            <div className="pt-8 bg-blue-light">

                <Link to="/mechanics" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        Turbofan
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-44"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The turbofan or fanjet is a type of airbreathing jet engine that is widely used in aircraft propulsion. The word "turbofan" is a portmanteau of "turbine" and "fan": the turbo portion refers to a gas turbine engine which achieves mechanical energy from combustion, and the fan, a ducted fan that uses the mechanical energy from the gas turbine to force air rearwards.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={2} />
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
