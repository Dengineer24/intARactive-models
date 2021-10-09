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
        mesh_48: THREE.Mesh
        mesh_49: THREE.Mesh
        mesh_50: THREE.Mesh
        mesh_51: THREE.Mesh
        mesh_52: THREE.Mesh
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
        mesh_90: THREE.Mesh
        mesh_91: THREE.Mesh
        mesh_92: THREE.Mesh
        mesh_93: THREE.Mesh
        mesh_94: THREE.Mesh
        mesh_95: THREE.Mesh
        mesh_96: THREE.Mesh
        mesh_97: THREE.Mesh
        mesh_98: THREE.Mesh
        mesh_99: THREE.Mesh
        mesh_100: THREE.Mesh
        mesh_101: THREE.Mesh
        mesh_102: THREE.Mesh
        mesh_103: THREE.Mesh
        mesh_104: THREE.Mesh
        mesh_105: THREE.Mesh
        mesh_106: THREE.Mesh
        mesh_107: THREE.Mesh
        mesh_108: THREE.Mesh
        mesh_109: THREE.Mesh
        mesh_110: THREE.Mesh
        mesh_111: THREE.Mesh
        mesh_112: THREE.Mesh
        mesh_113: THREE.Mesh
        mesh_114: THREE.Mesh
        mesh_115: THREE.Mesh
        mesh_116: THREE.Mesh
        mesh_117: THREE.Mesh
        mesh_118: THREE.Mesh
        mesh_119: THREE.Mesh
        mesh_120: THREE.Mesh
        mesh_121: THREE.Mesh
        mesh_122: THREE.Mesh
        mesh_123: THREE.Mesh
        mesh_124: THREE.Mesh
        mesh_125: THREE.Mesh
        mesh_126: THREE.Mesh
        mesh_127: THREE.Mesh
        mesh_128: THREE.Mesh
        mesh_129: THREE.Mesh
        mesh_130: THREE.Mesh
        mesh_131: THREE.Mesh
        mesh_132: THREE.Mesh
        mesh_133: THREE.Mesh
        mesh_134: THREE.Mesh
        mesh_135: THREE.Mesh
        mesh_136: THREE.Mesh
        mesh_137: THREE.Mesh
        mesh_138: THREE.Mesh
        mesh_139: THREE.Mesh
        mesh_140: THREE.Mesh
        mesh_141: THREE.Mesh
        mesh_142: THREE.Mesh
    }
    materials: {
        App5E: THREE.MeshStandardMaterial
        App603: THREE.MeshStandardMaterial
        App7F2: THREE.MeshStandardMaterial
        AppD43: THREE.MeshStandardMaterial
        AppE14: THREE.MeshStandardMaterial
        AppE53: THREE.MeshStandardMaterial
        AppAA: THREE.MeshStandardMaterial
        App2A2: THREE.MeshStandardMaterial
        App312: THREE.MeshStandardMaterial
        App8C: THREE.MeshStandardMaterial
        AppC: THREE.MeshStandardMaterial
        App224: THREE.MeshStandardMaterial
        AppCC1: THREE.MeshStandardMaterial
        App653: THREE.MeshStandardMaterial
        App08: THREE.MeshStandardMaterial
        App472: THREE.MeshStandardMaterial
        App01: THREE.MeshStandardMaterial
        App9C4: THREE.MeshStandardMaterial
        App224_0: THREE.MeshStandardMaterial
        AppFC: THREE.MeshStandardMaterial
    }
}


const state = proxy({
    current: null,
})

// type ActionName = 'Animation'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>

function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/internal_combustion_engine/scene.gltf') as GLTFResult
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
                <group position={[-0.34, 0.24, 0.24]} rotation={[Math.PI / 2, 0, Math.PI]}>
                    <mesh geometry={nodes.mesh_0.geometry} material={materials.App5E} />
                    <mesh geometry={nodes.mesh_1.geometry} material={materials.App603} />
                    <mesh geometry={nodes.mesh_2.geometry} material={materials.App7F2} />
                    <mesh geometry={nodes.mesh_3.geometry} material={materials.AppD43} />
                    <mesh geometry={nodes.mesh_4.geometry} material={materials.AppE14} />
                    <mesh geometry={nodes.mesh_5.geometry} material={materials.AppE53} />
                    <mesh geometry={nodes.mesh_6.geometry} material={materials.AppAA} />
                    <mesh geometry={nodes.mesh_7.geometry} material={materials.App2A2} />
                    <mesh geometry={nodes.mesh_8.geometry} material={materials.App312} />
                    <mesh geometry={nodes.mesh_9.geometry} material={materials.App8C} />
                    <mesh geometry={nodes.mesh_10.geometry} material={materials.AppC} />
                    <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
                    <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
                    <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
                    <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
                    <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
                    <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
                    <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
                    <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
                    <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
                    <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
                    <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
                    <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
                    <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
                    <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
                    <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
                    <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
                    <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
                    <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
                    <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
                    <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
                    <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
                    <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
                    <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
                    <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
                    <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
                    <mesh geometry={nodes.mesh_36.geometry} material={nodes.mesh_36.material} />
                    <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
                    <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
                    <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
                    <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
                    <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
                    <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
                    <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
                    <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
                    <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
                    <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
                    <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
                    <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
                    <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
                    <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
                    <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
                    <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
                    <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
                    <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
                    <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
                    <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
                    <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
                    <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
                    <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
                    <mesh geometry={nodes.mesh_60.geometry} material={nodes.mesh_60.material} />
                    <mesh geometry={nodes.mesh_61.geometry} material={nodes.mesh_61.material} />
                    <mesh geometry={nodes.mesh_62.geometry} material={nodes.mesh_62.material} />
                    <mesh geometry={nodes.mesh_63.geometry} material={nodes.mesh_63.material} />
                    <mesh geometry={nodes.mesh_64.geometry} material={nodes.mesh_64.material} />
                    <mesh geometry={nodes.mesh_65.geometry} material={nodes.mesh_65.material} />
                    <mesh geometry={nodes.mesh_66.geometry} material={nodes.mesh_66.material} />
                    <mesh geometry={nodes.mesh_67.geometry} material={nodes.mesh_67.material} />
                    <mesh geometry={nodes.mesh_68.geometry} material={nodes.mesh_68.material} />
                    <mesh geometry={nodes.mesh_69.geometry} material={nodes.mesh_69.material} />
                    <mesh geometry={nodes.mesh_70.geometry} material={nodes.mesh_70.material} />
                    <mesh geometry={nodes.mesh_71.geometry} material={nodes.mesh_71.material} />
                    <mesh geometry={nodes.mesh_72.geometry} material={nodes.mesh_72.material} />
                    <mesh geometry={nodes.mesh_73.geometry} material={nodes.mesh_73.material} />
                    <mesh geometry={nodes.mesh_74.geometry} material={nodes.mesh_74.material} />
                    <mesh geometry={nodes.mesh_75.geometry} material={nodes.mesh_75.material} />
                    <mesh geometry={nodes.mesh_76.geometry} material={nodes.mesh_76.material} />
                    <mesh geometry={nodes.mesh_77.geometry} material={nodes.mesh_77.material} />
                    <mesh geometry={nodes.mesh_78.geometry} material={nodes.mesh_78.material} />
                    <mesh geometry={nodes.mesh_79.geometry} material={nodes.mesh_79.material} />
                    <mesh geometry={nodes.mesh_80.geometry} material={nodes.mesh_80.material} />
                    <mesh geometry={nodes.mesh_81.geometry} material={nodes.mesh_81.material} />
                    <mesh geometry={nodes.mesh_82.geometry} material={nodes.mesh_82.material} />
                    <mesh geometry={nodes.mesh_83.geometry} material={nodes.mesh_83.material} />
                    <mesh geometry={nodes.mesh_84.geometry} material={nodes.mesh_84.material} />
                    <mesh geometry={nodes.mesh_85.geometry} material={nodes.mesh_85.material} />
                    <mesh geometry={nodes.mesh_86.geometry} material={nodes.mesh_86.material} />
                    <mesh geometry={nodes.mesh_87.geometry} material={nodes.mesh_87.material} />
                    <mesh geometry={nodes.mesh_88.geometry} material={nodes.mesh_88.material} />
                    <mesh geometry={nodes.mesh_89.geometry} material={nodes.mesh_89.material} />
                    <mesh geometry={nodes.mesh_90.geometry} material={nodes.mesh_90.material} />
                    <mesh geometry={nodes.mesh_91.geometry} material={nodes.mesh_91.material} />
                    <mesh geometry={nodes.mesh_92.geometry} material={nodes.mesh_92.material} />
                    <mesh geometry={nodes.mesh_93.geometry} material={nodes.mesh_93.material} />
                    <mesh geometry={nodes.mesh_94.geometry} material={nodes.mesh_94.material} />
                    <mesh geometry={nodes.mesh_95.geometry} material={nodes.mesh_95.material} />
                    <mesh geometry={nodes.mesh_96.geometry} material={nodes.mesh_96.material} />
                    <mesh geometry={nodes.mesh_97.geometry} material={nodes.mesh_97.material} />
                    <mesh geometry={nodes.mesh_98.geometry} material={nodes.mesh_98.material} />
                    <mesh geometry={nodes.mesh_99.geometry} material={nodes.mesh_99.material} />
                    <mesh geometry={nodes.mesh_100.geometry} material={nodes.mesh_100.material} />
                    <mesh geometry={nodes.mesh_101.geometry} material={nodes.mesh_101.material} />
                    <mesh geometry={nodes.mesh_102.geometry} material={nodes.mesh_102.material} />
                    <mesh geometry={nodes.mesh_103.geometry} material={nodes.mesh_103.material} />
                    <mesh geometry={nodes.mesh_104.geometry} material={nodes.mesh_104.material} />
                    <mesh geometry={nodes.mesh_105.geometry} material={nodes.mesh_105.material} />
                    <mesh geometry={nodes.mesh_106.geometry} material={nodes.mesh_106.material} />
                    <mesh geometry={nodes.mesh_107.geometry} material={nodes.mesh_107.material} />
                    <mesh geometry={nodes.mesh_108.geometry} material={nodes.mesh_108.material} />
                    <mesh geometry={nodes.mesh_109.geometry} material={nodes.mesh_109.material} />
                    <mesh geometry={nodes.mesh_110.geometry} material={nodes.mesh_110.material} />
                    <mesh geometry={nodes.mesh_111.geometry} material={nodes.mesh_111.material} />
                    <mesh geometry={nodes.mesh_112.geometry} material={nodes.mesh_112.material} />
                    <mesh geometry={nodes.mesh_113.geometry} material={nodes.mesh_113.material} />
                    <mesh geometry={nodes.mesh_114.geometry} material={nodes.mesh_114.material} />
                    <mesh geometry={nodes.mesh_115.geometry} material={nodes.mesh_115.material} />
                    <mesh geometry={nodes.mesh_116.geometry} material={nodes.mesh_116.material} />
                    <mesh geometry={nodes.mesh_117.geometry} material={nodes.mesh_117.material} />
                    <mesh geometry={nodes.mesh_118.geometry} material={nodes.mesh_118.material} />
                    <mesh geometry={nodes.mesh_119.geometry} material={nodes.mesh_119.material} />
                    <mesh geometry={nodes.mesh_120.geometry} material={nodes.mesh_120.material} />
                    <mesh geometry={nodes.mesh_121.geometry} material={nodes.mesh_121.material} />
                    <mesh geometry={nodes.mesh_122.geometry} material={nodes.mesh_122.material} />
                    <mesh geometry={nodes.mesh_123.geometry} material={nodes.mesh_123.material} />
                    <mesh geometry={nodes.mesh_124.geometry} material={nodes.mesh_124.material} />
                    <mesh geometry={nodes.mesh_125.geometry} material={nodes.mesh_125.material} />
                    <mesh geometry={nodes.mesh_126.geometry} material={nodes.mesh_126.material} />
                    <mesh geometry={nodes.mesh_127.geometry} material={nodes.mesh_127.material} />
                    <mesh geometry={nodes.mesh_128.geometry} material={nodes.mesh_128.material} />
                    <mesh geometry={nodes.mesh_129.geometry} material={nodes.mesh_129.material} />
                    <mesh geometry={nodes.mesh_130.geometry} material={nodes.mesh_130.material} />
                    <mesh geometry={nodes.mesh_131.geometry} material={nodes.mesh_131.material} />
                    <mesh geometry={nodes.mesh_132.geometry} material={nodes.mesh_132.material} />
                    <mesh geometry={nodes.mesh_133.geometry} material={nodes.mesh_133.material} />
                    <mesh geometry={nodes.mesh_134.geometry} material={nodes.mesh_134.material} />
                    <mesh geometry={nodes.mesh_135.geometry} material={nodes.mesh_135.material} />
                    <mesh geometry={nodes.mesh_136.geometry} material={nodes.mesh_136.material} />
                    <mesh geometry={nodes.mesh_137.geometry} material={nodes.mesh_137.material} />
                    <mesh geometry={nodes.mesh_138.geometry} material={nodes.mesh_138.material} />
                    <mesh geometry={nodes.mesh_139.geometry} material={nodes.mesh_139.material} />
                    <mesh geometry={nodes.mesh_140.geometry} material={nodes.mesh_140.material} />
                    <mesh geometry={nodes.mesh_141.geometry} material={nodes.mesh_141.material} />
                    <mesh geometry={nodes.mesh_142.geometry} material={nodes.mesh_142.material} />
                </group>
            </group>
        </group>
    )
}

function Details() {

    const snap = useSnapshot(state)
    if (snap.current === "App08") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Throttle</h1>
                <p className="text-xl text-justify">The throttle body is an important part of your air intake system that controls the air flowing into your engine.</p>
            </div>
        )
    }
    else if (snap.current === "App472") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Cylinder Head</h1>
                <p className="text-xl text-justify">Simpler reciprocating engines continue to use a carburetor to supply fuel into the cylinder. Although carburetor technology in automobiles reached a very high degree of sophistication and precision, from the mid-1980s it lost out on cost and flexibility to fuel injection. </p>
            </div>
        )
    }
    else if (snap.current === "App9C4") {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <h1 className="text-3xl uppercase">Flywheel</h1>
                <p className="text-xl text-justify">The flywheel is a disk or wheel attached to the crank, forming an inertial mass that stores rotational energy. In engines with only a single cylinder the flywheel is essential to carry energy over from the power stroke into a subsequent compression stroke.</p>
            </div>
        )
    }
    else {
        return (
            <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
                <p className="self-center mx-8 text-xl tracking-wide text-justify font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                <div className="grid justify-center grid-cols-1 gap-2 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                    <img className="flex p-6 text-6xl rounded-xl h-48 w-48" src="https://storage.echoar.xyz/wispy-violet-4999/b865f50d-d8c5-4f16-894d-3fb6a58e0340" alt="Mechanical QR" />
                    <a href="https://go.echoar.xyz/JMsn" target="_blank" rel="noreferrer">
                        <button className="h-12 px-8 ml-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn mt-16 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                    </a>
                </div>
            </div>
        )
    }
}

export default function CombustionEngine() {
    return (
        <>
            <div className="pt-8 bg-ARbg">

                <Link to="/mechanics" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                        Internal combustion engine
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-72"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">An internal combustion engine (ICE) is a heat engine in which the combustion of a fuel occurs with an oxidizer (usually air) in a combustion chamber that is an integral part of the working fluid flow circuit. In an internal combustion engine, the expansion of the high-temperature and high-pressure gases produced by combustion applies direct force to some component of the engine. The force is applied typically to pistons, turbine blades, a rotor, or a nozzle.</div>
                </div>

                <div className="md:grid md:grid-cols-3 md:pr-15 pr-1">

                    <div className="w-full h-screen px-4 outline-none cursor-pointer md:col-span-2 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [6, 6, 6], fov: 50 }}>
                            <ambientLight intensity={0.7} />
                            <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                            <Suspense fallback={null}>
                                <Model scale={5} />
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
