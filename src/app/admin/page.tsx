import Link from "next/link";

export default function Admin() {
  return (
    <div>
      <h1>Yetkisiz Erişim</h1>
      <p>
        Üzgünüz, bu sayfaya erişmek için gerekli yetkilere sahip değilsiniz.
      </p>
      <Link href="/">Ana Sayfaya Dön</Link>
    </div>
  );
}
