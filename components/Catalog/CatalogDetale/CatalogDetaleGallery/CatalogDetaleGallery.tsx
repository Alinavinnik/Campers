import { GalleryItem } from "@/types/camper";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import css from "./CatalogDetaleGallery.module.css";
import { Navigation } from "swiper/modules";

interface CatalogDetaleGalleryProps {
  gallery: GalleryItem[];
  camperName: string;
}

export default function CatalogDetaleGallery({
  gallery,
  camperName,
}: CatalogDetaleGalleryProps) {
  return (
    <div className={css.gallery}>
      <Swiper
        slidesPerView={1}
        spaceBetween={27}
        className={css["main-img"]}
        modules={[Navigation]}
        navigation
      >
        {gallery.map((img) => (
          <SwiperSlide key={img.id}>
            <Image
              src={img.original}
              alt={`${camperName} photo`}
              width={638}
              height={505}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper slidesPerView={4} spaceBetween={32}>
        {gallery.map((img) => {
          return (
            <SwiperSlide key={img.id}>
              <Image
                src={img.thumb}
                alt={`${camperName} preview`}
                width={136}
                height={144}
                className={css["prew-img"]}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
