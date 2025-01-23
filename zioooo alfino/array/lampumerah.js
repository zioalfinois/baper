const lampuLaluLintas = (warna) => {
    if (warna === "hijau") {
      console.log("jalan");
    } else if (warna === "kuning") {
      console.log("hati-hati");
    } else if (warna === "merah") {
      console.log("berhenti");
    } else if (warna === "biru") {
        console.log("polisi");
    } else {
      console.log("lampu error");
    }
  };
  
  lampuLaluLintas("merah");
  lampuLaluLintas("kuning");
  lampuLaluLintas("hijau");
  lampuLaluLintas("biru");