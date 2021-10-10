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
        mesh_19: THREE.Mesh
        mesh_20: THREE.Mesh
        mesh_21: THREE.Mesh
        mesh_22: THREE.Mesh
        mesh_23: THREE.Mesh
        mesh_24: THREE.Mesh
        mesh_25: THREE.Mesh
        mesh_26: THREE.Mesh
        mesh_27: THREE.Mesh
        mesh_28: THREE.Mesh
        mesh_29: THREE.Mesh
        mesh_30: THREE.Mesh
        mesh_31: THREE.Mesh
        mesh_32: THREE.Mesh
        mesh_33: THREE.Mesh
        mesh_34: THREE.Mesh
        mesh_35: THREE.Mesh
        mesh_36: THREE.Mesh
        mesh_37: THREE.Mesh
        mesh_38: THREE.Mesh
        mesh_39: THREE.Mesh
        mesh_40: THREE.Mesh
        mesh_41: THREE.Mesh
        mesh_42: THREE.Mesh
        mesh_43: THREE.Mesh
        mesh_44: THREE.Mesh
        mesh_45: THREE.Mesh
        mesh_46: THREE.Mesh
        mesh_47: THREE.Mesh
        mesh_49: THREE.Mesh
        mesh_50: THREE.Mesh
        mesh_51: THREE.Mesh
        mesh_52: THREE.Mesh
        mesh_48: THREE.Mesh
        mesh_53: THREE.Mesh
        mesh_54: THREE.Mesh
        mesh_55: THREE.Mesh
        mesh_56: THREE.Mesh
        mesh_57: THREE.Mesh
        mesh_58: THREE.Mesh
        mesh_59: THREE.Mesh
        mesh_60: THREE.Mesh
        mesh_61: THREE.Mesh
        mesh_62: THREE.Mesh
        mesh_63: THREE.Mesh
        mesh_64: THREE.Mesh
        mesh_65: THREE.Mesh
        mesh_66: THREE.Mesh
        mesh_67: THREE.Mesh
        mesh_68: THREE.Mesh
        mesh_69: THREE.Mesh
        mesh_70: THREE.Mesh
        mesh_71: THREE.Mesh
        mesh_72: THREE.Mesh
        mesh_73: THREE.Mesh
        mesh_74: THREE.Mesh
        mesh_75: THREE.Mesh
        mesh_76: THREE.Mesh
        mesh_77: THREE.Mesh
        mesh_78: THREE.Mesh
        mesh_79: THREE.Mesh
        mesh_80: THREE.Mesh
        mesh_81: THREE.Mesh
        mesh_82: THREE.Mesh
        mesh_83: THREE.Mesh
        mesh_84: THREE.Mesh
        mesh_85: THREE.Mesh
        mesh_86: THREE.Mesh
        mesh_87: THREE.Mesh
        mesh_88: THREE.Mesh
        mesh_89: THREE.Mesh
    }
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial
        ['Material.007']: THREE.MeshStandardMaterial
        ['Material.005']: THREE.MeshStandardMaterial
        ['Material.006']: THREE.MeshStandardMaterial
        ['Material.010']: THREE.MeshStandardMaterial
        ['Material.002']: THREE.MeshStandardMaterial
        ['Material.014']: THREE.MeshStandardMaterial
        ['Material.003']: THREE.MeshStandardMaterial
        ['Material.009']: THREE.MeshStandardMaterial
        material_0: THREE.MeshStandardMaterial
        ['Material.004']: THREE.MeshStandardMaterial
        ['Material.011']: THREE.MeshStandardMaterial
        ['Material.008']: THREE.MeshStandardMaterial
        ['Material.016']: THREE.MeshStandardMaterial
        ['Material.018']: THREE.MeshStandardMaterial
        ['Material.017']: THREE.MeshStandardMaterial
        ['Material.021']: THREE.MeshStandardMaterial
        ['Material.020']: THREE.MeshStandardMaterial
        ['Material.019']: THREE.MeshStandardMaterial
        ['Material.026']: THREE.MeshStandardMaterial
        ['Material.025']: THREE.MeshStandardMaterial
        ['Material.024']: THREE.MeshStandardMaterial
        ['Material.023']: THREE.MeshStandardMaterial
        ['Material.022']: THREE.MeshStandardMaterial
    }
}

const state = proxy({
    current: null,
})

// type ActionName = 'Animation'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/disassembled_v8_engine_block/scene.gltf') as GLTFResult
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
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-0.94, -0.8, 2.78]}>
                        <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
                        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                    </group>
                    <group position={[-2.47, 4.76, 0.04]}>
                        <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
                        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                    </group>
                    <group position={[-2.16, 5.04, 2.18]}>
                        <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
                    </group>
                    <group position={[-1.24, 4.42, -2.06]}>
                        <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
                    </group>
                    <group position={[-0.96, -2.6, 2.15]}>
                        <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
                    </group>
                    <group position={[-0.6, -3.08, 2.23]}>
                        <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
                    </group>
                    <group position={[-0.61, -3.07, 1.9]}>
                        <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
                    </group>
                    <group position={[1.1, -2.44, 2.21]}>
                        <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
                    </group>
                    <group position={[0.76, -2.83, 2.03]}>
                        <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
                    </group>
                    <group position={[0.47, -3.09, 2.35]}>
                        <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                    </group>
                    <group position={[-1.29, -2.39, -1.87]}>
                        <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                    </group>
                    <group position={[-0.7, -3.07, -1.81]}>
                        <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
                    </group>
                    <group position={[1.28, -2.31, -1.82]}>
                        <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                    </group>
                    <group position={[0.75, -2.85, -2]}>
                        <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
                    </group>
                    <group position={[-1.44, -2.26, -0.54]}>
                        <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
                    </group>
                    <group position={[-0.95, -2.5, -0.48]}>
                        <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
                    </group>
                    <group position={[-0.94, -2.49, -0.79]}>
                        <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
                    </group>
                    <group position={[0.73, -2.54, -0.72]}>
                        <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
                    </group>
                    <group position={[1.3, -2.24, -0.52]}>
                        <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
                    </group>
                    <group position={[-1.29, -2.33, 0.78]}>
                        <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
                    </group>
                    <group position={[-0.95, -2.5, 0.83]}>
                        <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
                    </group>
                    <group position={[0.93, -2.44, 0.81]}>
                        <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
                    </group>
                    <group position={[0.64, -2.59, 0.6]}>
                        <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
                    </group>
                    <group position={[0.64, -2.59, 0.29]}>
                        <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
                    </group>
                    <group position={[2.32, 4.75, 0.13]}>
                        <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
                        <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
                    </group>
                    <group position={[2, 5.04, -2.01]}>
                        <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
                    </group>
                    <group position={[1.06, 4.5, 2.26]}>
                        <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
                    </group>
                    <group position={[-1.37, -8.6, 2.24]}>
                        <mesh geometry={nodes.mesh_30.geometry} material={materials['Material.014']} />
                    </group>
                    <group position={[-2.43, 7.38, 1.92]}>
                        <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
                    </group>
                    <group position={[2.17, 7.15, 0.01]}>
                        <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
                    </group>
                    <group position={[0, 0, -5.35]}>
                        <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
                    </group>
                    <group position={[-0.09, -0.62, 4.14]}>
                        <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
                    </group>
                    <group position={[3.99, 0.93, 0.38]}>
                        <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
                    </group>
                    <group position={[-4.09, 0.94, 0.32]}>
                        <mesh geometry={nodes.mesh_36.geometry} material={nodes.mesh_36.material} />
                    </group>
                    <group position={[-0.09, -3.32, -1.61]}>
                        <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
                        <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                    </group>
                    <group position={[-0.08, 0.5, -4.25]}>
                        <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
                        <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
                    </group>
                    <group position={[-2.68, 2.17, 1.98]} scale={[0.99, 1, 1]}>
                        <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
                        <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
                        <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
                    </group>
                    <group position={[2.5, 2.18, -1.88]} scale={[1.09, 1, 1]}>
                        <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
                        <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
                        <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
                    </group>
                    <group position={[-0.09, -5.06, -1.22]}>
                        <mesh geometry={nodes.mesh_47.geometry} material={materials['Material.008']} />
                    </group>
                    <group position={[0, -3.63, 0]}>
                        <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
                        <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
                        <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
                        <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
                        <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
                    </group>
                    <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
                    <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
                    <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
                    <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
                    <mesh geometry={nodes.mesh_57.geometry} material={materials['Material.017']} />
                    <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
                    <group position={[-2.15, 3.88, 0]}>
                        <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
                        <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
                        <mesh geometry={nodes.mesh_61.geometry} material={nodes.mesh_61.material} />
                    </group>
                    <group position={[-0.09, 5.16, 0]}>
                        <mesh geometry={nodes.mesh_62.geometry} material={materials['Material.026']} />
                        <mesh geometry={nodes.mesh_63.geometry} material={materials['Material.025']} />
                        <mesh geometry={nodes.mesh_64.geometry} material={materials['Material.024']} />
                        <mesh geometry={nodes.mesh_65.geometry} material={materials['Material.023']} />
                        <mesh geometry={nodes.mesh_66.geometry} material={materials['Material.022']} />
                    </group>
                    <group position={[2, 3.88, -0.08]} scale={[-1, 1, 1]}>
                        <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_67.material} />
                        <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} />
                        <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} />
                    </group>
                    <group position={[0, 0, -0.02]}>
                        <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} />
                    </group>
                    <group position={[0, -4.72, 3]}>
                        <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} />
                    </group>
                    <group position={[0.18, -3.93, 2.01]}>
                        <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} />
                    </group>
                    <group position={[-0.37, -3.89, -1.8]}>
                        <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} />
                    </group>
                    <group position={[-0.05, -2.55, 0.85]}>
                        <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} />
                    </group>
                    <group position={[-0.24, -2.6, 0.61]}>
                        <mesh geometry={nodes.mesh_75.geometry} material={nodes.mesh_75.material} />
                    </group>
                    <group position={[1.97, -0.28, 2.78]}>
                        <mesh geometry={nodes.mesh_76.geometry} material={nodes.mesh_76.material} />
                    </group>
                    <group position={[1.97, 5.08, 2.28]}>
                        <mesh geometry={nodes.mesh_77.geometry} material={nodes.mesh_77.material} />
                    </group>
                    <group position={[-1.63, -1.16, 2.3]}>
                        <mesh geometry={nodes.mesh_78.geometry} material={nodes.mesh_78.material} />
                    </group>
                    <group position={[-1.63, -1.16, -1.02]}>
                        <mesh geometry={nodes.mesh_79.geometry} material={nodes.mesh_79.material} />
                    </group>
                    <group position={[-1.63, -6.29, -1.93]}>
                        <mesh geometry={nodes.mesh_80.geometry} material={nodes.mesh_80.material} />
                    </group>
                    <group position={[-1.63, -1.24, -1.9]}>
                        <mesh geometry={nodes.mesh_81.geometry} material={nodes.mesh_81.material} />
                    </group>
                    <group position={[1.45, -1.24, -1.91]}>
                        <mesh geometry={nodes.mesh_82.geometry} material={nodes.mesh_82.material} />
                    </group>
                    <group position={[1.43, -1.16, -1.03]}>
                        <mesh geometry={nodes.mesh_83.geometry} material={nodes.mesh_83.material} />
                    </group>
                    <group position={[1.43, -1.16, 2.31]}>
                        <mesh geometry={nodes.mesh_84.geometry} material={nodes.mesh_84.material} />
                    </group>
                    <group position={[-1.71, 7.09, 1.37]}>
                        <mesh geometry={nodes.mesh_85.geometry} material={nodes.mesh_85.material} />
                    </group>
                    <group position={[1.56, 7.08, -1.13]}>
                        <mesh geometry={nodes.mesh_86.geometry} material={nodes.mesh_86.material} />
                    </group>
                    <group position={[4, 0.92, -2.41]}>
                        <mesh geometry={nodes.mesh_87.geometry} material={nodes.mesh_87.material} />
                    </group>
                    <group position={[-4.1, 0.94, 2.57]}>
                        <mesh geometry={nodes.mesh_88.geometry} material={nodes.mesh_88.material} />
                    </group>
                    <group position={[-2.12, 5.08, 2.6]}>
                        <mesh geometry={nodes.mesh_89.geometry} material={nodes.mesh_89.material} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "Material.001") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Cylinder Head</h1>
                <p className="text-xl text-justify">Simpler reciprocating engines continue to use a carburetor to supply fuel into the cylinder. Although carburetor technology in automobiles reached a very high degree of sophistication and precision, from the mid-1980s it lost out on cost and flexibility to fuel injection. </p>
            </div>
        )
    }
    else if (snap.current === "Material.009") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Exhaust Manifold </h1>
                <p className="text-xl text-justify">Internal combustion engines have to effectively manage the exhaust of the cooled combustion gas from the engine. The exhaust system frequently contains devices to control both chemical and noise pollution. In addition, for cyclic combustion engines the exhaust system is frequently tuned to improve emptying of the combustion chamber.</p>
            </div>
        )
    }
    else if (snap.current === "Material.018") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Engine Block </h1>
                <p className="text-xl text-justify">The Pontiac V8 engine is a family of overhead valve 90° V8 engines manufactured by the Pontiac Division of General Motors Corporation between 1955 and 1981. The engine featured a cast iron block and head and 2 valves per cylinder. </p>
            </div>
        )
    }
    else if (snap.current === "Material.008") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Oil Pin </h1>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">Click on different parts of V8 Pontiac to know more.</p>
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid place-item-center">
                    <img className="block p-6 text-6xl rounded-xl h-48 min-w-48" src="https://storage.echo3d.co/shiny-wave-1052/b1956e28-8564-42f5-a013-8249da9e9b07.png" alt="Mechanical QR" />
                    <a href="https://go.echo3d.co/5gN3" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function V8Pontiac() {
    return (
        <>
            <div className="pt-8 bg-blue-light">

                <Link to="/mechanics" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        V8 Pontiac
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-56"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">The Pontiac V8 engine is a family of overhead valve 90° V8 engines manufactured by the Pontiac Division of General Motors Corporation between 1955 and 1981. The engine featured a cast iron block and head and 2 valves per cylinder. </div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={0.5} />
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
