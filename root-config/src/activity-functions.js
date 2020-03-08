export function alwaysTrue(location) {
  // The navbar is always active
  return true;
}

export function homescreen(location) {
  return location.pathname.startsWith("/");
}

export function vue(location) {
  return location.pathname.startsWith("/vue");
}

export function react(location) {
  return location.pathname.startsWith("/react");
}
