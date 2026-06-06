function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

async function getCountry() {
    try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return data.country_code; // contoh: "ID", "US"
    } catch (error) {
        console.error("Gagal mendapatkan negara:", error);
        return null;
    }
}

async function redirectUser() {
    const country = await getCountry();
    const mobile = isMobile();

    if (country === "ID") {
        if (mobile) {
            window.location.href = "https://hotto.co.id/"; // ID + Mobile
        } else {
            window.location.href = "https://hotto.co.id/"; // ID + Desktop
        }
    } else if (country === "US") {
        if (mobile) {
            window.location.href = "https://hotto.co.id/"; // US + Mobile
        } else {
            window.location.href = "https://hotto.co.id/"; // US + Desktop
        }
    } else {
        window.location.href = "https://hotto.co.id/"; // Negara lain
    }
}

redirectUser();
