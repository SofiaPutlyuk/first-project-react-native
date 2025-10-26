import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: "List Screen" }} />
      <Stack.Screen name="todo" options={{ title: "To Do" }} />
    </Stack>
  );
}