import React, { Suspense, useRef } from "react"
import { Link } from "react-router-dom"
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei"

type GLTFResult = GLTF & {
    nodes: {
        mesh_0: THREE.Mesh
        mesh_1: THREE.Mesh
        mesh_2: THREE.Mesh
        mesh_3: THREE.Mesh
    }
    materials: {
        ['Material.001']: THREE.MeshStandardMaterial
        steel2: THREE.MeshStandardMaterial
        steel1: THREE.MeshStandardMaterial
    }
}


function Model({ ...props }: JSX.IntrinsicElements['group']) {
    const group = useRef<THREE.Group>()
    const { nodes, materials } = useGLTF('/spure_gear/scene.gltf') as GLTFResult
    return (
        <group ref={group} {...props} dispose={null}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[-1.06, 0, 0]} rotation={[Math.PI, -1.37, Math.PI]}>
                        <mesh geometry={nodes.mesh_0.geometry} material={materials['Material.001']} />
                        <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
                    </group>
                    <group name="Gear002_2" position={[1.04, 0.01, 0]} rotation={[-Math.PI, 0.54, -Math.PI]}>
                        <mesh geometry={nodes.mesh_2.geometry} material={materials.steel1} />
                        <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
                    </group>
                </group>
            </group>
        </group>
    )
}

function Details() {

    return (
        <div className="h-full md:flex md:flex-col md:justify-center font-fontVollkorn">
            {/* <h1 className="text-2xl tracking-wider">Click on diffrent parts of Spur gear to know more</h1> */}
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

export default function SuperGear() {
    return (
        <>
            <div className="pt-8 bg-ARbg">

                <Link to="/mechanics" className="ml-8">Go Back</Link>

                <div className="grid w-full py-10 place-items-center">
                    <h1 className="pb-2 text-5xl font-semibold tracking-wide font-carattere lg:text-6xl">
                    Spur gear
                    </h1>
                    <div className="inline-flex h-1 bg-indigo-500 rounded-full w-48"></div>
                    <div className="font-fontVollkorn text-justify text-xl w-86 mt-2 mx-4 md:mx-44">Spur gears or straight-cut gears are the simplest type of gear. They consist of a cylinder or disk with teeth projecting radially. Viewing the gear at 90 degrees from the shaft length (side on) the tooth faces are straight and aligned parallel to the axis of rotation. Looking down the length of the shaft, a tooth's cross section is usually not triangular. Instead of being straight (as in a triangle) the sides of the cross section have a curved form (usually involute and less commonly cycloidal) to achieve a constant drive ratio.</div>
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
