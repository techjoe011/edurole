"use client";

import { useEffect, useRef } from "react";

const locations = [
  ["ZCAS University", -15.3940, 28.3220, "Lusaka, Zambia", "University"],
  ["Kwame Nkrumah University", -14.4460, 28.4460, "Kabwe, Zambia", "University"],
  ["Mulungushi University", -14.4350, 28.4530, "Kabwe, Zambia", "University"],
  ["Eden University", -15.3080, 28.2800, "Barlastone Park, Lusaka, Zambia", "University"],
  ["Mukuba University", -12.8020, 28.2170, "Kitwe, Zambia", "University"],
  ["Kapasa Makasa University", -10.6060, 32.2220, "Chinsali, Zambia", "University"],
  ["Rusangu University", -16.1970, 27.5190, "Monze, Zambia", "University"],
  ["University of Lusaka (UNILUS)", -15.3720, 28.3230, "Lusaka, Zambia", "University"],
  ["George Benson Christian University", -17.0310, 26.4850, "Kalomo, Zambia", "University"],
  ["Lusaka Apex Medical University", -15.3560, 28.3480, "Lusaka, Zambia", "Medical & Health"],
  ["Levy Mwanawasa Medical University", -15.3670, 28.3540, "Lusaka, Zambia", "Medical & Health"],
  ["Chipata College of Nursing", -13.6340, 32.6460, "Chipata, Zambia", "Medical & Health"],
  ["Kafue Institute of Health Sciences", -15.7710, 28.1810, "Kafue, Zambia", "Medical & Health"],
  ["NIPA", -15.4210, 28.3080, "Lusaka, Zambia", "College, Institute & Body"],
  ["Evelyn Hone College", -15.4110, 28.2820, "Lusaka, Zambia", "College, Institute & Body"],
  ["TVTC Luanshya", -13.1360, 28.3930, "Luanshya, Zambia", "College, Institute & Body"],
  ["NORTEC Ndola", -12.9690, 28.6550, "Ndola, Zambia", "College, Institute & Body"],
  ["LBTC Lusaka", -15.4380, 28.3270, "Burma Road, Lusaka, Zambia", "College, Institute & Body"],
  ["Zambia Institute of Tourism", -17.8460, 25.8540, "Livingstone, Zambia", "College, Institute & Body"],
  ["WARMA", -15.4160, 28.2970, "Lusaka, Zambia", "College, Institute & Body"],
  ["ZIHRM", -15.4060, 28.3100, "Lusaka, Zambia", "College, Institute & Body"],
  ["ZIPS", -15.4260, 28.3180, "Lusaka, Zambia", "College, Institute & Body"],
  ["Solusi University", -20.2180, 28.1660, "Bulawayo, Zimbabwe", "Zimbabwe"],
  ["NUST", -20.1640, 28.6420, "Bulawayo, Zimbabwe", "Zimbabwe"],
  ["Lupane State University", -18.9320, 27.7590, "Lupane, Zimbabwe", "Zimbabwe"],
  ["Zimbabwe School of Mines", -20.1460, 28.5820, "Bulawayo, Zimbabwe", "Zimbabwe"],
];

export default function ClientMap() {
  const element = useRef(null);

  useEffect(() => {
    let map;
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !element.current) return;
      map = L.map(element.current, { scrollWheelZoom: false, zoomControl: true }).setView([-15.8, 28.8], 5);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      locations.forEach(([name, lat, lng, place, category]) => {
        L.circleMarker([lat, lng], {
          radius: 8,
          color: "#fff",
          weight: 3,
          fillColor: "#02BDFF",
          fillOpacity: 1,
          className: "institution-marker",
        })
          .addTo(map)
          .bindTooltip(name)
          .bindPopup(`<strong>${name}</strong><br>${place}<br><small>${category}</small>`);
      });
    });

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return <div ref={element} className="client-map" aria-label="Interactive map of EduRole institutions" />;
}
