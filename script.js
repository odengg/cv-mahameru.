document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { name: "Drum Plastik 200L Bolong Atas", spec: "Ukuran 200L, model potongan / bolong atas.", file: "drum plastik 200lt bolong atas" },
        { name: "Drum Plastik 100L", spec: "Kapasitas 100 Liter, bahan HDPE tebal.", file: "drum plastik 100 lt" },
        { name: "Drum Galvanis 100L", spec: "Bahan galvanis anti karat 100 Liter.", file: "drum galvanish 100 lt" },
        { name: "Drum Besi 200L Tutup Lebar", spec: "Kapasitas 200 Liter, Tutup Lebar (TL) + Ring.", file: "drum besi 200 lt tutup lebar" },
        { name: "Jerigen 35L Sintas", spec: "Jerigen HDPE tebal Sintas 35 Liter.", file: "jerigen 35 lt (sintas)" },
        { name: "Kerangka Kempu Polosan", spec: "Rangka besi galvanis IBC Tank 1000L.", file: "kerangka kempu polosan" },
        { name: "Jerigen Kaleng Aluminium", spec: "Bahan aluminium mulus, tutup ulir.", file: "jerigen kaleng alumunium" },
        { name: "Drum Galvanis 200L", spec: "Bahan galvanis 200 Liter, 2 Tutup Kecil (TK).", file: "drum galvanis 200 lt" },
        { name: "Kaleng 20L", spec: "Wadah kaleng/jerigen 20 Liter.", file: "kaleng 20 lt" },
        { name: "Drum Besi Pake Tutup", spec: "Drum besi dengan penutup atas lengkap.", file: "drum besi pake tutup" },
        { name: "Drum 100L Tanpa Tutup", spec: "Drum besi potongan / bak adukan 100L.", file: "drum 100 lt tanpa tutup" },
        { name: "Kempu Lengkap 1000L", spec: "IBC Tank 1000L komplit kempu & kran.", file: "kempu lengkap 1000 lt" },
        { name: "Kaleng 60L Bekas Parfum", spec: "Wadah kaleng 60 Liter mulus.", file: "kaleng 60 liter bekas parfum" },
        { name: "Drum Plastik 200L Ring 4", spec: "Drum plastik 200 Liter tipe Ring 4.", file: "drum plastik 200 lt ring 4" },
        { name: "Botol Kempu Hitam Vernis", spec: "Kempu / tanki dalam warna hitam.", file: "botol kempu hitam bekas vernis" },
        { name: "Botol Kempu Bening Kimia", spec: "Kempu / tanki dalam bening mulus.", file: "botol kempu bening bekas kimia" },
        { name: "Kaleng 40L", spec: "Jerigen kaleng serbaguna 40 Liter.", file: "kaleng 40 liter" },
        { name: "Kaleng 30L Bekas Parfum", spec: "Ukuran 30 Liter mulus bekas bibit parfum.", file: "kaleng 30 lt bekas parfum" },
        { name: "Drum 120L Tutup Lebar", spec: "Model Tutup Lebar (TL) + ring klem.", file: "drum 120 lt tutup lebar" },
        { name: "Drum 150L Tutup Lebar", spec: "Kapasitas 150 Liter, Tutup Lebar (TL).", file: "drum 150 lt tutup lebar" },
        { name: "Drum Plastik 200L TL", spec: "Kapasitas 200 Liter, Tutup Lebar (TL).", file: "drum plastik 200 lt (tl)" },
        { name: "Drum 200L Ring 2", spec: "Drum plastik 200 Liter tipe Ring 2.", file: "drum 200 lt ring 2" },
        { name: "Drum Plastik 200L Polos", spec: "Drum plastik 200 Liter bodi mulus.", file: "drum plastik 200 lt polos" }
    ];

    const grid = document.getElementById("product-grid");
    if (grid) {
        grid.innerHTML = products.map(p => {
            const p1 = `assets/images/drums/${p.file}.jpg`;
            const p2 = `assets/images/drums/${p.file}.jpeg`;

            return `
                <div class="card">
                    <img src="${p1}" 
                         onerror="if(!this.dataset.tried){this.dataset.tried='1'; this.src='${p2}';}else{this.onerror=null;}" 
                         alt="${p.name}">
                    <h3>${p.name}</h3>
                    <p>${p.spec}</p>
                    <a href="https://wa.me/6281334838972?text=Halo%20CV%20Mahameru%20Drum,%20saya%20mau%20tanya%20stok%20${encodeURIComponent(p.name)}" 
                       target="_blank" 
                       class="btn-card-wa">Tanya via WA</a>
                </div>
            `;
        }).join("");
    }
});