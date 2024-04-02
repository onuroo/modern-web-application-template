import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { cookies, nextUrl } = request;
  const { pathname } = nextUrl;

  // Ara katman sadece istemcinin talep ettiği yolu işlemez, aynı zamanda önbelleğe alınan verilerin yollarını da işler
  // Bu noktayı izole edebilmek için aşağıdaki komut kullanılır
  if (nextUrl.pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // Eğer user-token yok ise login ekranına yönlendir
  if (!isAuthenticated(cookies) && !pathname.startsWith("/unauthorized")) {
    const url = request.nextUrl.clone();
    url.pathname = "/unauthorized";
    return NextResponse.redirect(url);
  } else if (pathname.startsWith("/admin")) {
    // Eğer user var ve user admin sayfasına erişmeye çalışıyorsa ve user admin değilse,
    // useryı bir hata sayfasına yönlendir.
    // user bilgilerini kontrol et (Örneğin, bir session kontrolü yap)
    const user_is_admin = checkUserIsAdmin(request); // Bu fonksiyonun mantığı sizin tarafınızdan sağlanmalı

    if (!user_is_admin) {
      const url = request.nextUrl.clone();
      url.pathname = "/unauthorized";
      return NextResponse.redirect(url);
    }
  }

  // Diğer tüm durumlar için normal istek akışına devam et.
  return NextResponse.next();
}

function checkUserIsAdmin(request: NextRequest) {
  // Bu fonksiyon, örneğin bir cookie veya Authorization header'ından usernın admin olup olmadığını kontrol etmelidir.
  // Bu örnekte basit bir kontrol yapılacaktır, gerçek uygulamalarda güvenlik önlemlerinizi uygulamanız önemlidir.
  return request.headers.get("x-user-role") === "admin";
}

function isAuthenticated(cookies: any) {
  const user_token = cookies["user-token"];
  return user_token;
}
