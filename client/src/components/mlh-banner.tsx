import type * as React from "react"

type MLHBannerVariant = "white" | "black" | "gray" | "red" | "blue" | "yellow"

const variants: Record<MLHBannerVariant, React.CSSProperties> = {
  white: {
    "--mlh-banner-background": "#f7f7f7",
    "--mlh-banner-accent": "#e0e0e06b",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#e73427",
    "--mlh-banner-letter-l": "#1d539f",
    "--mlh-banner-letter-h": "#f8b92a",
    "--mlh-banner-text-tagline": "#242425",
    "--mlh-banner-text-official": "#122f4c",
    "--mlh-banner-text-season": "#122f4c",
  },
  black: {
    "--mlh-banner-background": "#000",
    "--mlh-banner-accent": "#101111",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#fff",
    "--mlh-banner-letter-l": "#fff",
    "--mlh-banner-letter-h": "#fff",
    "--mlh-banner-text-tagline": "#fff",
    "--mlh-banner-text-official": "#000",
    "--mlh-banner-text-season": "#fff",
  },
  gray: {
    "--mlh-banner-background": "#122F4C",
    "--mlh-banner-accent": "#091826",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#fff",
    "--mlh-banner-letter-l": "#fff",
    "--mlh-banner-letter-h": "#fff",
    "--mlh-banner-text-tagline": "#fff",
    "--mlh-banner-text-official": "#122F4C",
    "--mlh-banner-text-season": "#fff",
  },
  red: {
    "--mlh-banner-background": "#E73427",
    "--mlh-banner-accent": "#AD271D",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#fff",
    "--mlh-banner-letter-l": "#fff",
    "--mlh-banner-letter-h": "#fff",
    "--mlh-banner-text-tagline": "#fff",
    "--mlh-banner-text-official": "#E73427",
    "--mlh-banner-text-season": "#fff",
  },
  blue: {
    "--mlh-banner-background": "#1D539F",
    "--mlh-banner-accent": "#163E77",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#fff",
    "--mlh-banner-letter-l": "#fff",
    "--mlh-banner-letter-h": "#fff",
    "--mlh-banner-text-tagline": "#fff",
    "--mlh-banner-text-official": "#1D539F",
    "--mlh-banner-text-season": "#fff",
  },
  yellow: {
    "--mlh-banner-background": "#F8B92A",
    "--mlh-banner-accent": "#BA8B20",
    "--mlh-banner-highlight": "#fff",
    "--mlh-banner-letter-m": "#fff",
    "--mlh-banner-letter-l": "#fff",
    "--mlh-banner-letter-h": "#fff",
    "--mlh-banner-text-tagline": "#fff",
    "--mlh-banner-text-official": "#F8B92A",
    "--mlh-banner-text-season": "#fff",
  },
}

type MLHBannerProps = Omit<React.HTMLAttributes<SVGElement>, "children"> & { variant: MLHBannerVariant }

export function MLHBannerGraphic({ variant, style, ...props }: MLHBannerProps): React.ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 393 688" style={{ ...variants[variant], ...style }} {...props}>
      <title>Major League Hacking 2025 Hackathon Season</title>
      <path
        id="banner"
        style={{ fill: "var(--mlh-banner-background)" }}
        d="m18 0 .3809 200.96-17.592 8.7207-.4297-.1113v.3261l-.25.123.25.174v134.34l11.631 3.0507c3.3186.8693 6.6682 1.6248 10 2.4473v272.01c0 2.6 3.8189 5.7006 7.1289 6.8906l163.32 58.211c3.31 1.18 8.4207 1.1688 11.721-.0312l158.98-58.148c3.29-1.2 4.8496-4.312 4.8496-6.922v-270.65c8.4998-2.246 13.465-3.8473 14.199-4.0897l10.691-3.5312V209.42l.25-.1739-.0118-.0097-19.908-9.8711-.2207-199.37h-354.99z"
      />
      <path
        id="triangle"
        style={{ fill: "var(--mlh-banner-accent)" }}
        d="M356.11 354.3c-29.592 7.0038-82.721 16.722-151.77 17.197l151.77 19.186z"
      />
      <path
        id="highlight"
        style={{ fill: "var(--mlh-banner-highlight)" }}
        d="M377.3 332.51s-159.77 52.82-361.36 0V229.73c185.96 48.41 361.36 0 361.36 0z"
      />
      <path
        id="m"
        style={{ fill: "var(--mlh-banner-letter-m)" }}
        d="M149.84 63.72c1.76.78 3.27 1.8 4.54 3.06 1.27 1.27 2.29 2.78 3.07 4.53.78 1.76 1.17 3.61 1.17 5.57v71.33c0 .65-.23 1.21-.68 1.65s-1 .67-1.66.67h-17.06c-.66 0-1.19-.22-1.6-.67s-.61-1-.61-1.65V83.37h-13.75v64.84c0 .65-.21 1.21-.61 1.65-.41.45-.94.67-1.6.67h-15.47c-.66 0-1.21-.22-1.66-.67s-.68-1-.68-1.65V83.37H89.49v64.84c0 1.55-.78 2.33-2.33 2.33H70.22c-1.56 0-2.33-.78-2.33-2.33V64.88c0-1.55.78-2.33 2.33-2.33h74.02c1.96 0 3.82.39 5.58 1.16z"
      />
      <path
        id="l"
        style={{ fill: "var(--mlh-banner-letter-l)" }}
        d="M233.01 129.19c.69 0 1.26.23 1.69.69s.65 1.03.65 1.7v16.59c0 .67-.22 1.24-.65 1.7s-1 .69-1.69.69h-58.44c-1.65 0-2.47-.8-2.47-2.39V64.95c0-1.59.82-2.39 2.47-2.39h17.94c1.65 0 2.47.8 2.47 2.39v61.98c0 .67.24 1.22.72 1.63.48.42 1.06.63 1.76.63z"
      />
      <path
        id="h"
        style={{ fill: "var(--mlh-banner-letter-h)" }}
        d="M322.83 62.56q1.05 0 1.77.69c.72.69.72 1.03.72 1.7v83.46c0 .67-.24 1.24-.72 1.7s-1.07.69-1.77.69h-18.18q-1.05 0-1.77-.69c-.72-.69-.72-1.03-.72-1.7v-29.12c0-.67-.22-1.22-.65-1.64-.44-.42-1-.63-1.7-.63h-25.5q-1.05 0-1.77.63c-.72.63-.72.97-.72 1.64v29.12c0 1.6-.83 2.4-2.48 2.4h-18.05c-1.66 0-2.48-.8-2.48-2.4V64.95c0-1.6.83-2.4 2.48-2.4h18.05c1.65 0 2.48.8 2.48 2.4v28.24c0 1.6.83 2.4 2.48 2.4h25.5c.7 0 1.26-.23 1.7-.69s.65-1.03.65-1.7V64.96c0-.67.24-1.24.72-1.7s1.07-.69 1.77-.69h18.18z"
      />
      <path
        id="major-league-hacking"
        style={{ fill: "var(--mlh-banner-text-tagline)" }}
        d="M68.279 157.31c-.25 0-.3691.1191-.3691.3691v12.859c0 .25.1191.3711.3691.3711h2.6816c.25 0 .3691-.121.3691-.371v-9.92h2.17v9.92c0 .1.0393.1917.1093.2617s.1598.1093.2598.1093H76.32c.1 0 .18-.0393.25-.1093s.0996-.1618.0996-.2618v-9.9199h2.1699v9.92c0 .1.0396.1917.0996.2617s.15.1093.25.1093h2.7012c.1 0 .1898-.0393.2598-.1093s.1094-.1618.1094-.2618v-10.949c0-.31-.0497-.5989-.1797-.8789s-.2903-.5207-.4903-.7207-.4407-.3702-.7207-.4902v-.0098c-.27-.12-.5689-.1796-.8789-.1796H68.279zm37.711 0c-.1 0-.18.0394-.25.1094s-.0996.1597-.0996.2597v9.5801c0 .1-.0413.18-.1113.25s-.1598.0997-.2598.0997h-2.8203c-.1 0-.1898-.0397-.2598-.0997-.08-.06-.1093-.15-.1093-.25V164.48c0-.25-.1292-.371-.3692-.371h-2.6816c-.25 0-.3691.121-.3691.371v4.1602c0 .31.0597.599.1797.879s.2802.5204.4902.7304.4505.3702.7305.4902c.27.11.5689.17.8789.17h5.8496c.31 0 .6008-.05.8808-.17s.5207-.2802.7207-.4902.3703-.4505.4903-.7305c.12-.27.1797-.5689.1797-.8789v-10.951c0-.1-.0414-.1897-.1114-.2597v-.0098c-.07-.07-.1597-.1094-.2597-.1094H105.99zm20.939 0c-.25 0-.3691.1191-.3691.3691v12.859c0 .25.1191.3711.3691.3711h2.6797c.25 0 .371-.121.371-.371v-3.6095c0-.07.0397-.0996.0997-.0996h2.3105c.07 0 .1087.0301.1387.0801l2.0605 3.6894c.05.09.1304.1607.2304.2207s.2106.0899.3106.0899h3.0898c.1 0 .169-.0299.209-.0899.04-.05.0305-.1307-.0195-.2207h-.0098l-2.0801-3.5898-.0195-.039c-.05-.06-.0314-.0911.0586-.1211l.0605-.0196c.46-.15.8291-.4105 1.1191-.8105.29-.39.4414-.8401.4414-1.3301v-5.1094c0-.31-.0597-.6009-.1797-.8809-.13-.28-.2902-.5187-.4902-.7187s-.4407-.3703-.7207-.4903c-.27-.12-.569-.1797-.879-.1797h-8.7811zm21.4 0c-.25 0-.3691.1191-.3691.3691v12.859c0 .25.1191.3711.3691.3711h8.3906c.1 0 .18-.0393.25-.1093s.0996-.1618.0996-.2618v-2.5586c0-.1-.0396-.1897-.0996-.2597s-.15-.1113-.25-.1113h-4.9707c-.1 0-.1798-.0397-.2598-.0997s-.1093-.15-.1093-.25v-9.58c0-.25-.1211-.3692-.3711-.3692h-2.6797zm151.47 0c-.25 0-.371.1191-.371.3691v12.859c0 .25.121.3711.371.3711h2.6797c.25 0 .3691-.121.3691-.371V160.96c0-.1.0414-.18.1114-.25s.1597-.1015.2597-.1015h3.8496c.1 0 .1898.0415.2598.1015s.1094.15.1094.25v9.5781c0 .1.0396.1918.0996.2618s.15.1093.25.1093h2.7012c.1 0 .1797-.0393.2597-.1093s.1094-.1618.1094-.2618v-10.949c0-.31-.0597-.5989-.1797-.8789-.13-.28-.2902-.5207-.4902-.7207s-.4388-.3702-.7188-.4902l-.0097-.0098c-.27-.12-.5709-.1796-.8809-.1796h-8.7793zm-212.23.0098c-.31 0-.6009.0597-.8809.1797-.28.13-.5185.2902-.7285.4902s-.3702.4407-.4902.7207c-.11.27-.17.5689-.17.8789v10.949c0 .25.1292.371.3692.371h2.6797c.25 0 .371-.121.371-.371v-3.4785c0-.1.0395-.1898.1095-.2598s.1597-.1113.2597-.1113h3.8496c.1 0 .18.0413.25.1113s.0996.1598.0996.2598v3.4785c0 .1.0414.1917.1114.2617s.1597.1094.2597.1094h2.6992c.1 0 .1898-.0394.2598-.1094s.1113-.1617.1113-.2617v-10.949c0-.31-.0496-.599-.1797-.879s-.2902-.5206-.4902-.7206-.4407-.3703-.7207-.4903-.5806-.1796-.8906-.1796zm26.789 0c-.31 0-.599.0597-.879.1797-.28.13-.5204.2902-.7304.4902s-.3702.4507-.4902.7207-.1797.5689-.1797.8789v9.0508c0 .31.0597.5989.1797.8789s.2802.5205.4902.7305.4505.3702.7305.4902c.27.11.5689.17.8789.17h6.8808c.31 0 .599-.05.879-.17s.5206-.2802.7206-.4902c.21-.21.3702-.4605.4902-.7305s.1797-.569.1797-.879v-9.0507c0-.31-.0497-.599-.1797-.879s-.2902-.5206-.4902-.7206-.4407-.3703-.7207-.4903c-.27-.12-.5689-.1796-.8789-.1796zm60.34 0c-.31 0-.599.0597-.879.1797-.28.13-.5204.2902-.7304.4902s-.3702.4407-.4902.7207c-.11.27-.17.5689-.17.8789v10.949c0 .25.1312.371.3712.371h2.6797c.25 0 .3691-.121.3691-.371v-3.4785c0-.1.0413-.1898.1113-.2598s.1598-.1113.2598-.1113h3.8496c.1 0 .18.0413.25.1113s.0996.1598.0996.2598v3.4785c0 .1.0394.1917.1094.2617s.1597.1094.2597.1094h2.7012c.1 0 .1898-.0394.2598-.1094s.1094-.1617.1094-.2617v-10.949c0-.31-.0497-.599-.1797-.879s-.2902-.5206-.4902-.7206-.4388-.3703-.7188-.4903-.5806-.1796-.8906-.1796zm14.461 0c-.31 0-.6009.0597-.8809.1797-.28.13-.5185.2902-.7285.4902s-.3702.4507-.4902.7207-.1797.5689-.1797.8789v9.0508c0 .31.0597.5989.1797.8789s.2802.5205.4902.7305.4485.3702.7285.4902c.27.11.5709.17.8809.17h6.8789c.31 0 .6009-.05.8809-.17s.5207-.2802.7207-.4902c.21-.21.3702-.4605.4902-.7305s.1797-.569.1797-.879v-4.7811c0-.1-.0413-.1898-.1113-.2598s-.1598-.1094-.2598-.1094h-2.6992c-.1 0-.1798.0394-.2598.1094s-.1113.1598-.1113.2598v3.4004c0 .1-.0396.18-.0996.25s-.15.0996-.25.0996h-3.8496c-.1 0-.1898-.0396-.2598-.0996s-.1094-.15-.1094-.25v-6.2891c0-.1.0394-.18.1094-.25s.1598-.1016.2598-.1016h6.5098c.1 0 .1897-.0393.2597-.1093s.1114-.1598.1114-.2598v-2.5606c0-.1-.0414-.1898-.1114-.2598s-.1597-.1094-.2597-.1094zm12.42 0c-.25 0-.3691.1191-.3691.3691v10.951c0 .31.0499.599.1699.879s.2783.5204.4883.7304.4504.3702.7304.4902c.27.11.5709.17.8809.17h6.8789c.32 0 .6106-.05.8906-.17s.5207-.2802.7207-.4902c.21-.21.3702-.4605.4902-.7305s.1797-.5689.1797-.8789v-10.951c0-.1-.0413-.1898-.1113-.2598s-.1598-.1093-.2598-.1093h-2.6992c-.1 0-.1897.0393-.2597.1093s-.1114.1598-.1114.2598v9.5801c0 .1-.0396.18-.0996.25s-.15.0996-.25.0996h-3.8496c-.1 0-.1897-.0396-.2597-.0996s-.1094-.15-.1094-.25v-9.5801c0-.25-.131-.3691-.371-.3691zm34.57 0c-.25 0-.371.1191-.371.3691v12.861c0 .25.121.3691.371.3691h2.6797c.25 0 .3691-.1191.3691-.3691v-4.4902c0-.1.0414-.18.1114-.25s.1597-.0996.2597-.0996h3.8496c.1 0 .18.0396.25.0996s.0996.15.0996.25v4.4902c0 .1.0414.1898.1114.2598s.1597.1093.2597.1093h2.6992c.1 0 .1798-.0393.2598-.1093s.1113-.1598.1113-.2598v-12.861c0-.1-.0413-.1898-.1113-.2598s-.1598-.1093-.2598-.1093h-2.6992c-.1 0-.1897.0393-.2597.1093s-.1114.1598-.1114.2598v4.3496c0 .1-.0396.1917-.0996.2617s-.15.1094-.25.1094h-3.8496c-.25 0-.371-.1211-.371-.3711v-4.3496c0-.25-.1192-.3691-.3692-.3691zm16.4 0c-.31 0-.6009.0597-.8809.1797-.28.13-.5204.2902-.7304.4902s-.3703.4407-.4903.7207c-.11.27-.1699.5689-.1699.8789v10.949c0 .25.1311.371.3711.371h2.6797c.25 0 .3691-.121.3691-.371v-3.4785c0-.1.0414-.1898.1114-.2598s.1597-.1113.2597-.1113h3.8496c.1 0 .18.0413.25.1113s.0997.1598.0997.2598v3.4785c0 .1.0413.1917.1113.2617s.1597.1094.2597.1094h2.6992c.1 0 .1898-.0394.2598-.1094s.1113-.1617.1113-.2617v-10.949c0-.31-.0516-.599-.1816-.879s-.2902-.5206-.4902-.7206-.4388-.3703-.7188-.4903-.5806-.1796-.8906-.1796zm14.439 0c-.31 0-.6009.0597-.8808.1797-.28.13-.5186.2902-.7286.4902s-.3702.4407-.4902.7207c-.12.27-.1797.5689-.1797.8789v9.0508c0 .31.0597.5989.1797.8789s.2802.5205.4902.7305.4485.3702.7285.4902c.27.11.5709.17.8809.17h7.75c.1 0 .1798-.0395.2598-.1095s.1093-.1617.1093-.2617V167.98c0-.1-.0393-.1897-.1093-.2597s-.1598-.1114-.2598-.1114h-6.2402c-.1 0-.1798-.0396-.2598-.0996s-.1093-.15-.1093-.25v-6.289c0-.1.0393-.19.1093-.25.07-.07.1598-.1016.2598-.1016h6.2402c.1 0 .1798-.0394.2598-.1094s.1093-.1598.1093-.2598v-2.5606c0-.1-.0393-.1897-.1093-.2597s-.1598-.1094-.2598-.1094h-7.75zm11.59 0c-.25 0-.3691.1191-.3691.3691v12.861c0 .25.1191.3691.3691.3691h2.6797c.25 0 .371-.1191.371-.3691v-2.8711c0-.1.0185-.2199.0685-.3399a.82.82 0 0 1 .1601-.2792l1.6113-1.7715c.03-.05.0596-.0386.0996.0214l2.9297 5.2988c.05.09.1305.1607.2305.2207s.2086.0899.3086.0899h3.2207c.1 0 .171-.0299.211-.0899.04-.05.0284-.1307-.0216-.2207l-4.5488-7.4199c-.03-.06.0196-.1386.0196-.1386h.0097l4.6406-5.461c.07-.07.0903-.1394.0703-.1894s-.0796-.08-.1796-.08h-3.2207c-.1 0-.2101.03-.3301.08s-.2095.1095-.2695.1895l-5.0098 5.871v-5.7714c0-.25-.1211-.3692-.3711-.3692h-2.6797zm14.76 0c-.25 0-.3691.1191-.3691.3691v12.861c0 .25.1191.3691.3691.3691h2.6797c.25 0 .371-.1191.371-.3691v-12.861c0-.25-.121-.3691-.371-.3691zm22.82 0c-.31 0-.6009.0597-.8809.1797-.28.13-.5185.2902-.7285.4902s-.3702.4507-.4902.7207-.1797.5689-.1797.8789v9.0508c0 .31.0597.5989.1797.8789s.2802.5205.4902.7305.4485.3702.7285.4902c.27.11.5709.17.8809.17h6.8789c.31 0 .6009-.05.8809-.17s.5207-.2802.7207-.4902c.21-.21.3702-.4605.4902-.7305s.1797-.569.1797-.879v-4.7811c0-.1-.0413-.1898-.1113-.2598s-.1598-.1094-.2598-.1094h-2.6992c-.1 0-.1798.0394-.2598.1094s-.1113.1598-.1113.2598v3.4004c0 .1-.0396.18-.0996.25s-.15.0996-.25.0996h-3.8496c-.1 0-.1898-.0396-.2598-.0996s-.1094-.15-.1094-.25v-6.2891c0-.1.0394-.18.1094-.25s.1598-.1016.2598-.1016h6.5098c.1 0 .1897-.0393.2597-.1093s.1114-.1598.1114-.2598v-2.5606c0-.1-.0414-.1898-.1114-.2598s-.1597-.1094-.2597-.1094zm-156.81.0195c-.1 0-.1898.0394-.2598.1094s-.1093.1617-.1093.2617v12.859c0 .25.1191.3691.3691.3691h9.6504c.1 0 .1898-.0393.2598-.1093s.1093-.1598.1093-.2598v-2.4297c0-.1-.0393-.1898-.1093-.2598s-.1598-.1113-.2598-.1113h-6.5098c-.07 0-.0996-.0396-.0996-.0996v-2.0996c0-.07.0396-.0996.0996-.0996h5.5606c.1 0 .18-.0414.25-.1113.07-.07.0996-.1598.0996-.2598v-1.9394c0-.1-.0396-.1898-.0996-.2598s-.15-.1113-.25-.1113h-5.5606c-.07 0-.0996-.0281-.0996-.0781v-2.1211c0-.07.0396-.0996.0996-.0996h6.5098c.1 0 .1898-.0397.2598-.0997s.1093-.15.1093-.25v-2.4512c0-.1-.0393-.1897-.1093-.2597v.0195c-.07-.07-.1598-.1094-.2598-.1094h-9.6504zm56.73 0c-.1 0-.1898.0394-.2598.1094s-.1093.1617-.1093.2617v12.859c0 .25.1191.3691.3691.3691h9.6504c.1 0 .1898-.0393.2598-.1093s.1093-.1598.1093-.2598v-2.4297c0-.1-.0393-.1898-.1093-.2598s-.1598-.1113-.2598-.1113h-6.5098c-.07 0-.1016-.0396-.1016-.0996v-2.0996c0-.07.0416-.0996.1016-.0996h5.5586c.1 0 .18-.0414.25-.1113.07-.07.1016-.1598.1016-.2598v-1.9394c0-.1-.0416-.1898-.1016-.2598s-.15-.1113-.25-.1113h-5.5586c-.07 0-.1016-.0281-.1016-.0781v-2.1211c0-.07.0416-.0996.1016-.0996h6.5098c.1 0 .1898-.0397.2598-.0997s.1093-.15.1093-.25v-2.4512c0-.1-.0393-.1897-.1093-.2597v.0195c-.07-.07-.1598-.1094-.2598-.1094h-9.6504zm-127.35 3.0293h4.5586v3.4199H88.728zm87.129 0h4.5605v3.4199h-4.5605zm77.852 0h4.5586v3.4199h-4.5586zm-123.85.1113h4.6797v3.2988h-4.6797zm-14.34.1387h4.5606v6.9902h-4.5606z"
      />
      <path
        id="official"
        style={{ fill: "var(--mlh-banner-text-official)" }}
        d="M50.207 264.74a7.64 7.64 0 0 0-1.5977.129c-1.06.19-2.0302.5505-2.9102 1.0605-.88.52-1.6395 1.2008-2.2695 2.0508s-1.0801 1.7994-1.3301 2.8594c-2.47 10.27-4.9304 20.541-7.4004 30.811-.25 1.06-.28 2.1102-.08 3.1602.2 1.06.601 2.0202 1.2011 2.9102.59.89 1.3588 1.6491 2.2988 2.2891.93.64 1.981 1.0896 3.131 1.3496 8.5 1.93 17.021 3.7003 25.561 5.3203 1.16.22 2.3001.2195 3.4101.0098 1.11-.21 2.0985-.5997 2.9785-1.1797.87-.58 1.62-1.3095 2.25-2.1895.62-.88 1.0307-1.8597 1.2207-2.9297l5.5195-31.201c.19-1.07.1506-2.1202-.1094-3.1602s-.6797-1.9593-1.2598-2.7793c-.57-.82-1.3112-1.531-2.2012-2.131s-1.879-1.009-2.959-1.209h.0098c-7.98-1.51-15.929-3.1706-23.859-4.9706-.535-.12-1.0698-.1868-1.6035-.1993zm284.93 3.0059a2.1 2.1 0 0 0-.3027.043c-3.1.64-6.2006 1.2516-9.3106 1.8516-.85.16-1.1991.6597-1.0391 1.5098 2.79 14.74 5.5889 29.49 8.3789 44.23.16.85.701 1.1898 1.621 1.0098 10.42-2 20.8-4.2314 31.15-6.6914.39-.09.6697-.2899.8497-.5899s.2186-.6285.1386-.9785l-2.0996-8.7305c-.09-.35-.2803-.6205-.5703-.8105-.3-.18-.6297-.2307-1.0098-.1407h.0098c-6.04 1.44-12.079 2.8003-18.139 4.0703-.38.08-.7212.0411-1.0312-.1289-.31-.16-.4984-.4212-.5684-.7812l-6.8418-32.82c-.1487-.735-.565-1.087-1.2363-1.043zm-27.908 5.2988c-.5312-.0225-1.0702.0107-1.6152.0957-8.01 1.28-16.029 2.4202-24.059 3.4102-1.09.14-2.0915.4795-3.0215 1.0195-.92.55-1.7094 1.2102-2.3594 1.9902s-1.1297 1.6794-1.4297 2.6894c-.31 1.01-.3993 2.0606-.2793 3.1406l4.2285 38.119c.1.86.6013 1.2308 1.5312 1.1308 3.36-.38 6.7184-.781 10.068-1.2109.92-.12 1.3307-.609 1.2207-1.459-.52-4.02-1.0406-8.0503-1.5606-12.07-.04-.36.0512-.681.2813-.961s.5399-.45.9199-.5c4.71-.62 9.4192-1.28 14.119-2 .38-.06.7004.0206.9804.2305s.44.4896.5.8496c.61 4.01 1.2296 8.0213 1.8496 12.031.05.36.231.6497.541.8497.3.21.6491.2787 1.0392.2187 3.36-.53 6.7298-1.0784 10.09-1.6484.39-.07.6999-.251.9199-.541s.3002-.6088.2402-.9688c-2.18-12.59-4.3493-25.191-6.5293-37.791-.19-1.08-.5797-2.0494-1.1797-2.9394s-1.3109-1.6214-2.1309-2.1914c-.82-.58-1.749-.9897-2.789-1.2598a7.5 7.5 0 0 0-1.5763-.2343zm-212.04.2852c-.6718-.0133-1.063.3558-1.1855 1.0996-2.37 14.82-4.7491 29.631-7.1191 44.451-.13.86.2597 1.35 1.1797 1.5 3.35.53 6.6891 1.0395 10.039 1.5195.92.13 1.4405-.2301 1.5605-1.0801.72-5.05 1.4304-10.1 2.1504-15.15.03-.23.1604-.3191.4004-.2891 6.02.85 12.048 1.6186 18.078 2.3086.38.04.7007-.0495.9707-.2695s.421-.5092.461-.8692c.31-2.82.6291-5.6312.9491-8.4512.04-.36-.04-.6692-.25-.9492s-.499-.4405-.869-.4805c-5.94-.69-11.871-1.4393-17.791-2.2793-.23-.04-.329-.1606-.299-.3906.35-2.45.6891-4.8899 1.0392-7.3398.02-.18.1508-.2507.3808-.2207 7.72 1.09 15.449 2.0511 23.199 2.8711.37.04.7005-.0515.9805-.2715s.4385-.5091.4785-.8691c.31-2.98.6217-5.9497.9317-8.9297.04-.36-.0613-.6812-.2813-.9512l-.0097.0117c-.22-.27-.519-.4307-.879-.4707-11.3-1.2-22.57-2.6907-33.811-4.4707a2.2 2.2 0 0 0-.3047-.0293zm-41.906 3.7793c5.36 1.19 10.731 2.3113 16.111 3.3613-1.57 8-3.1312 16.01-4.7012 24.02a687 687 0 0 1-16.689-3.4805c1.76-7.96 3.5193-15.93 5.2793-23.9zm208.67 1.5918c-.0956-.005-.1972-.0005-.3047.0097-3.14.29-6.2799.5586-9.4199.8086-.87.07-1.2712.5307-1.2012 1.3906 1.15 14.96 2.2914 29.919 3.4414 44.879.07.86.5583 1.2516 1.4883 1.1816 3.36-.27 6.73-.561 10.09-.871.9263-.0897 1.3472-.5568 1.2715-1.4103-1.42-14.94-2.83-29.88-4.25-44.82-.07-.7437-.4461-1.1353-1.1152-1.168zm-123.52.0312c-.6739.0328-1.0413.4253-1.1113 1.1777-1.4 14.94-2.8109 29.88-4.2109 44.82-.08.86.3395 1.33 1.2695 1.42 3.37.31 6.7316.5993 10.102.8593.93.07 1.4302-.3197 1.4902-1.1797.39-5.09.7682-10.17 1.1582-15.26.01-.22.1409-.3306.3809-.3106 6.05.46 12.1.831 18.16 1.1308.38.02.6992-.09.9492-.33s.3804-.5404.4004-.9004c.13-2.83.2704-5.6602.4004-8.4902.02-.36-.0905-.6697-.3106-.9297-.23-.26-.5204-.4-.9004-.42-5.97-.29-11.929-.6593-17.879-1.1093-.24-.02-.35-.1411-.33-.3711.19-2.46.3705-4.9306.5605-7.3906.02-.18.1391-.2583.3691-.2383 7.77.58 15.541 1.0296 23.311 1.3496.37.01.6792-.0999.9492-.3398s.41-.5404.42-.9004c.12-2.99.2296-5.9807.3496-8.9707.02-.36-.1-.6697-.3399-.9297v-.0196c-.24-.26-.5501-.4001-.9101-.4101-11.33-.46-22.659-1.21-33.969-2.25a2.2 2.2 0 0 0-.3086-.0078zm100.35 1.6973c-8.68.51-17.37.8398-26.07 1.0098-.41.01-.8185.0215-1.2285.0215-1.1.02-2.1313.2494-3.1113.6894-.98.45-1.8286 1.0205-2.5586 1.7305s-1.2912 1.5493-1.7012 2.5293c-.4.98-.5996 2.0096-.5996 3.0996.01 1.75.0293 3.4902.0293 5.2402 0 1.47.0215 2.95.0215 4.42.02 5.28.05 10.56.08 15.84.01 1.65.0293 3.3108.0293 4.9608v1.2188c0 1.09.23 2.1198.67 3.0898.44.98 1.0498 1.821 1.8398 2.541.78.72 1.6998 1.28 2.7598 1.67 1.05.39 2.1698.5805 3.3398.5605.44 0 .8803-.0215 1.3203-.0215 4.2-.08 8.4094-.1996 12.609-.3496 5.11-.19 10.22-.4305 15.32-.7305.39-.02.7207-.1597.9707-.4297.25-.26.3696-.5794.3496-.9394-.18-2.99-.359-5.9709-.539-8.9609-.02-.36-.1712-.6587-.4512-.8887-.28-.24-.61-.3403-1-.3203-7.71.45-15.43.7707-23.15.9707-.38.01-.7086-.1003-.9786-.3203s-.4199-.511-.4199-.871c-.17-7.35-.3417-14.689-.5117-22.029-.01-.36.1113-.6607.3613-.8907l.0098-.0098c.25-.23.5597-.3594.9297-.3594 7.46-.18 14.91-.4997 22.35-.9297.37-.02.6799-.1716.9199-.4316s.35-.5794.33-.9394c-.18-2.99-.359-5.969-.539-8.959-.02-.36-.1597-.6607-.4297-.8907s-.5811-.3403-.9511-.3203zm-56.629.8906c-.87-.02-1.3198.3998-1.3398 1.2598-.42 15-.8512 30-1.2812 45-.02.86.4313 1.3101 1.3613 1.3301 3.37.09 6.7491.1592 10.119.1992.93.01 1.4102-.4192 1.4102-1.2792v-.0098c.16-15 .3107-30.01.4707-45.01.01-.86-.421-1.3006-1.291-1.3106-3.15-.03-6.2992-.0997-9.4492-.1797zm121.03 3.0098c.61 3.94 1.2103 7.8901 1.8203 11.83-5.49.85-11 1.6298-16.51 2.3398-.52-3.96-1.031-7.909-1.541-11.869 5.42-.7 10.83-1.4708 16.23-2.3008z"
      />
      <path
        id="2025-season"
        style={{ fill: "var(--mlh-banner-text-season)" }}
        d="M280.15 438c-1.434 0-2.1504.7155-2.1504 2.1445v43.336c0 .602.1894 1.0918.5664 1.4688.453.376.98.5645 1.584.5645h38.039c.603 0 1.0937.2247 1.4707.6757.378.376.5664.8648.5664 1.4668v9.3672c0 .602-.1884 1.0908-.5664 1.4668-.377.377-.8677.5664-1.4707.5664H280.15c-.604 0-1.131.2238-1.584.6758-.377.376-.5664.8648-.5664 1.4668v13.656c0 .602.1894 1.1281.5664 1.5801.453.376.98.5645 1.584.5645h44.605q2.7164-.0001 5.0938-1.0156c1.66-.677 3.0555-1.6183 4.1875-2.8223 1.207-1.204 2.1511-2.5958 2.8301-4.1758.755-1.655 1.1328-3.3845 1.1328-5.1894v-21.219c0-1.806-.3778-3.4981-1.1328-5.0781-.679-1.58-1.623-2.9718-2.83-4.1758-1.132-1.204-2.5276-2.1433-4.1876-2.8203-1.585-.677-3.2828-1.0176-5.0938-1.0176h-26.83c-.604 0-1.1339-.1865-1.5859-.5625-.378-.452-.5664-.9781-.5664-1.5801v-9.1426c0-.601.1884-1.0908.5664-1.4668.452-.451.982-.6778 1.586-.6778h35.547c.603 0 1.0936-.1884 1.4706-.5644.378-.376.5664-.8648.5664-1.4668v-13.881c0-.602-.1884-1.0908-.5664-1.4668-.377-.451-.8677-.6778-1.4707-.6778H280.15zm-215.54.461c-.61 0-1.0985.2088-1.4785.6288s-.5703.931-.5703 1.541v14.02c0 .61.1903 1.1005.5703 1.4805s.8685.5684 1.4785.5684h35.801c.61 0 1.1191.2109 1.5391.6309s.6309.929.6309 1.539v9.2306c0 .61-.2109 1.121-.6309 1.541s-.929.6289-1.5391.6289h-27.02c-1.83 0-3.5614.3512-5.1914 1.0312-1.64.68-3.0593 1.6296-4.2793 2.8496s-2.1596 2.6188-2.8496 4.2188-1.0312 3.3109-1.0312 5.1309v32.6c0 1.45.7319 2.1699 2.1719 2.1699h56.09c.61 0 1.0985-.209 1.4785-.629s.5703-.931.5703-1.541v-13.789c0-.61-.1903-1.121-.5703-1.541s-.8685-.6289-1.4785-.6289h-38.301c-1.14 0-1.8208-.5709-2.0508-1.7109V488.271c.3-1.21.9808-1.8203 2.0508-1.8203h38.301c.61 0 1.1191-.1884 1.5391-.5684s.6309-.8705.6309-1.4805v-29.07c0-.15-.0413-.2598-.1114-.3398v-3.1894c0-1.83-.3493-3.5514-1.0293-5.1914s-1.6396-3.0388-2.8496-4.2188c-1.22-1.18-2.6207-2.1316-4.2207-2.8516s-3.3089-1.0781-5.1289-1.0781h-42.521zm144.88 0c-.61 0-1.1005.2088-1.4805.6288s-.5703.931-.5703 1.541v14.02c0 .61.1903 1.1005.5703 1.4805s.8705.5684 1.4805.5684h35.799c.61 0 1.121.2109 1.541.6309s.6309.929.6309 1.539v9.2306c0 .61-.2109 1.121-.6309 1.541s-.931.6289-1.541.6289h-27.02c-1.83 0-3.5594.3512-5.1894 1.0312s-3.0495 1.6296-4.2695 2.8496-2.1696 2.6188-2.8496 4.2188c-.69 1.6-1.0312 3.3109-1.0312 5.1309v32.6c0 1.45.73 2.1699 2.1699 2.1699h56.09c.61 0 1.1005-.209 1.4805-.629s.5703-.931.5703-1.541v-13.789c0-.61-.1903-1.121-.5703-1.541s-.8705-.6289-1.4805-.6289h-38.299c-1.14 0-1.8208-.5709-2.0508-1.7109v-10.15l-.0098-.0097c.3-1.21.9808-1.8203 2.0508-1.8203h38.299c.61 0 1.121-.1884 1.541-.5684s.629-.8705.629-1.4805v-29.07c0-.15-.0395-.2598-.1094-.3398v-3.1894c0-1.83-.3493-3.5514-1.0293-5.1914s-1.6316-3.0388-2.8516-4.2188-2.6188-2.1316-4.2188-2.8516-3.311-1.0781-5.1308-1.0781h-42.52zm-63.82.0097c-1.83 0-3.5594.36-5.1894 1.0801s-3.0595 1.6696-4.2695 2.8496c-1.22 1.18-2.1716 2.5888-2.8516 4.2188-.69 1.64-1.0293 3.3714-1.0293 5.1914v53.119c0 1.83.3493 3.5594 1.0293 5.1894s1.6316 3.0615 2.8516 4.2715c1.21 1.22 2.6295 2.1696 4.2695 2.8496 1.64.69 3.3694 1.0293 5.1894 1.0293h34.311c1.83 0 3.5494-.3493 5.1894-1.0293s3.0407-1.6296 4.2207-2.8496c1.18-1.21 2.1296-2.6315 2.8496-4.2715s1.0801-3.3694 1.0801-5.1894v-53.119c0-1.83-.36-3.5514-1.0801-5.1914-.72-1.64-1.6696-3.0388-2.8496-4.2188s-2.5907-2.1296-4.2207-2.8496c-1.64-.72-3.3694-1.0801-5.1894-1.0801zm6.041 19.379h22.229v41.041h-22.229zm-87.15 84.141c-1.08 0-2.1003.2106-3.0703.6406s-1.8093.9895-2.5293 1.6894-1.2914 1.53-1.6914 2.5c-.41.97-.6094 1.9903-.6094 3.0703v12.689c0 1.08.1994 2.0891.6094 3.0391s.9714 1.78 1.6914 2.5 1.5593 1.2814 2.5293 1.6914 1.9903.6094 3.0703.6094h16.33c.36 0 .6602.1191.9102.3691s.3691.5502.3691.9102v5.6016c0 .36-.1191.659-.3691.879-.25.23-.5502.3397-.9102.3397H57.94c-.36 0-.6602.1212-.9102.3711-.25.25-.3691.5502-.3691.9102v8.1699c0 .85.4193 1.2793 1.2793 1.2793h26.93c1.08 0 2.1003-.1994 3.0703-.6094s1.8-.9714 2.5-1.6914 1.2614-1.5593 1.6914-2.5293.6387-1.9903.6387-3.0703v-12.689c0-1.08-.2087-2.101-.6387-3.041-.43-.95-.9914-1.78-1.6914-2.5s-1.53-1.2794-2.5-1.6894-1.9903-.6094-3.0703-.6094H68.472c-.36 0-.6609-.121-.8809-.371-.23-.25-.3398-.5502-.3398-.9102v-5.4688c0-.36.1098-.6602.3398-.9102s.5209-.371.8809-.371h21.529c.36 0 .6602-.1099.9102-.3399s.3691-.519.3691-.879V543.27c0-.85-.4293-1.2793-1.2793-1.2793H64.562zm143.28 0c-1.08 0-2.1003.2106-3.0703.6406s-1.8093.9895-2.5293 1.6894-1.2894 1.53-1.6894 2.5c-.41.97-.6113 1.9903-.6113 3.0703v12.689c0 1.08.2013 2.0891.6113 3.0391s.9695 1.78 1.6894 2.5 1.5593 1.2814 2.5293 1.6914 1.9903.6094 3.0703.6094h16.33c.36 0 .6602.1191.9102.3691s.3691.5502.3691.9102v5.6016c0 .36-.1191.659-.3691.879-.25.23-.5502.3397-.9102.3397h-22.949c-.36 0-.6602.1212-.9102.3711-.25.25-.371.5502-.371.9102v8.1699c0 .85.4212 1.2793 1.2811 1.2793h26.93c1.08 0 2.1003-.1994 3.0703-.6094s1.8-.9714 2.5-1.6914 1.2596-1.5593 1.6896-2.5293.6406-1.9903.6406-3.0703v-12.689c0-1.08-.2106-2.101-.6406-3.041-.43-.95-.9895-1.78-1.6895-2.5s-1.53-1.2794-2.5-1.6894-1.9903-.6094-3.0703-.6094h-16.4c-.36 0-.661-.121-.881-.371-.23-.25-.3398-.5502-.3398-.9102v-5.4688c0-.36.1199-.6602.3399-.9102.23-.25.5208-.371.8808-.371h21.529c.36 0 .6602-.1099.9102-.3399s.3711-.519.3711-.879V543.27c0-.85-.4212-1.2793-1.2812-1.2793h-25.439zm89.891 0c-.85 0-1.2812.4293-1.2812 1.2793v44.68c0 .85.4212 1.2812 1.2812 1.2812h9.3086c.85 0 1.2812-.4212 1.2812-1.2812v-27.33l14.92 27.541c.18.32.4506.5793.8106.7793s.72.3008 1.08.3008h9.7188c.36 0 .6602-.1211.9102-.3711s.3711-.5482.3711-.9082v-44.682c0-.36-.121-.6602-.371-.9102l-.0099-.0097c-.25-.25-.5501-.3692-.9101-.3692h-9.379c-.36 0-.66.1192-.91.3692s-.3712.5501-.3712.9101v27.4l-14.98-27.6c-.18-.32-.4486-.5812-.8086-.7812s-.72-.2989-1.08-.2989h-9.5802zm-140.02.0098c-1.08 0-2.1003.2106-3.0703.6406s-1.8113.9895-2.5312 1.6895-1.2795 1.53-1.6895 2.5-.6094 1.9903-.6094 3.0703v38.061c0 .85.4293 1.2793 1.2793 1.2793h9.3106c.85 0 1.2793-.4193 1.2793-1.2793v-12.08c0-.36.1211-.6602.3711-.9102s.5502-.371.9102-.371h13.359c.36 0 .6489.121.8789.371s.3398.5502.3398.9102v12.08c0 .36.1211.6582.3711.9082s.5502.371.9102.371H188.2c.36 0 .6601-.121.9101-.371s.3711-.5482.3711-.9082v-38.061c0-1.08-.2106-2.1003-.6406-3.0703s-.9895-1.8-1.6894-2.5-1.53-1.2595-2.5-1.6895c-.964-.4274-1.9781-.638-3.0508-.6406h-23.889zm96.35 0c-1.08 0-2.1003.2106-3.0703.6406s-1.8093.9895-2.5293 1.6895-1.2814 1.53-1.6914 2.5-.6094 1.9903-.6094 3.0703v31.449c0 1.08.2094 2.1003.6094 3.0703.41.97.9714 1.8093 1.6914 2.5293s1.5593 1.2814 2.5293 1.6914 1.9903.6094 3.0703.6094h23.889c1.08 0 2.1003-.1994 3.0703-.6094s1.8-.9714 2.5-1.6914 1.2614-1.5593 1.6914-2.5293.6387-1.9903.6387-3.0703v-31.449c0-1.08-.2087-2.1003-.6387-3.0703s-.9914-1.8-1.6914-2.5-1.53-1.2595-2.5-1.6895-1.9903-.6406-3.0703-.6406zm-149.75.0097c-.36 0-.6602.1211-.9102.3711s-.371.5482-.371.9082v44.682c0 .85.4212 1.2793 1.2811 1.2793h33.539c.36 0 .6602-.1191.9102-.3691s.3711-.5502.3711-.9102v-8.4414c0-.36-.121-.6601-.371-.9101s-.5503-.3692-.9103-.3692h-22.609c-.23 0-.3398-.1098-.3398-.3398v-7.291c0-.23.1098-.3399.3398-.3399h19.299c.36 0 .651-.119.881-.369.23-.24.3398-.5503.3398-.9103v-6.75c0-.36-.1199-.6601-.3399-.9101-.23-.25-.5209-.3692-.8809-.3692h-19.299c-.23 0-.3398-.0915-.3398-.2714v-7.3594c0-.23.1098-.3399.3398-.3399h22.609c.36 0 .6602-.1098.9102-.3398s.3711-.5209.3711-.8809v-8.5c0-.36-.121-.6601-.371-.9101v.0117c-.25-.25-.5503-.3711-.9103-.3711h-33.539zm57.359 10.58h15.859v11.881h-15.859zm96.369.8809h15.861v24.299H258.04z"
      />
    </svg>
  )
}

const mlhBannerLinkStyle: React.CSSProperties = {
  maxWidth: "100px",
  minWidth: "60px",
  position: "absolute",
  right: "50px",
  top: "0",
  width: "10%",
  zIndex: "10000",
}

export function MLHBanner({ variant }: { variant: MLHBannerVariant }): React.ReactNode {
  return (
    <a
      id="mlh-trust-badge"
      style={mlhBannerLinkStyle}
      href={`https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=${variant}`}
      target="_blank"
      rel="noreferrer"
    >
      <MLHBannerGraphic variant={variant} className="w-full" />
    </a>
  )
}