import Clock from "./Clock";
import type { Dictionary } from "@/lib/i18n";

export default function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="wrap footer">
      <span>{t.copyright}</span>
      <span>
        {t.builtPre}
        <span className="heart">♥</span>
        {t.builtPost}
      </span>
      <Clock suffix={t.clockSuffix} />
    </footer>
  );
}
