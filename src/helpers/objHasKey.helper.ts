export default function objHasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}
