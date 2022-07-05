import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GLView } from "expo-gl";
import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
} from "three";
import { Renderer } from "expo-three";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StackParams } from "../Navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../lib/colors";

const Render3D = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>();
  return (
    <SafeAreaView>
      <GLView
        style={{ width: 500, height: 500 }}
        onContextCreate={onContextCreate}
      />
      <TouchableOpacity
        style={{
          width: 200,
          height: 200,
          backgroundColor: colors.blue_secondary,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.reset({ routes: [{ name: "Register" }] })}
      >
        <Text style={{ fontSize: 24 }}>처음부터 다시 하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

async function onContextCreate(gl: WebGL2RenderingContext) {
  console.log(gl);
  const scene = new Scene();
  const camera = new PerspectiveCamera(
    75,
    gl.drawingBufferWidth / gl.drawingBufferHeight,
    0.1,
    1000
  );
  camera.position.z = 2;

  const renderer = new Renderer({ gl });
  renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({
    color: "blue",
  });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  const render = () => {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
    gl.endFrameEXP();
  };

  render();
}
export default Render3D;

const styles = StyleSheet.create({});
