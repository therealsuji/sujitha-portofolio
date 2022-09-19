import { FC, PropsWithChildren } from "react";

// Custom Type for a React functional component with props AND CHILDREN
export type FCC<P = {}> = FC<PropsWithChildren<P>>;

interface AnyType {
  [key: string]: any;
}
export type FCCC<P = {}> = FC<PropsWithChildren<P>> & AnyType;
