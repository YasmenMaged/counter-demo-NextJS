"use client";

import { BasicButton } from "@/components/BasicButton";
import Link from "next/link";
import { useThemeStore } from "../providers/theme.store";

export default function Home() {
  const { toggleTheme } = useThemeStore();

  return (
    <div className="flex flex-col gap-4">
      <BasicButton btnColor="red">
        <Link href="/server-counter">Server Counter</Link>
      </BasicButton>
      <BasicButton btnColor="blue">
        <Link href="/server-api-counter">Server API Counter</Link>
      </BasicButton>
      <BasicButton btnColor="green">
        <Link href="/client-counter">Client Counter</Link>
      </BasicButton>
      <BasicButton btnColor="yellow">
        <Link href="/counter-provider-version">Counter Provider Version</Link>
      </BasicButton>
      <BasicButton btnColor="purple" onClick={toggleTheme}>
        Toggle Theme
      </BasicButton>
    </div>
  );
}
