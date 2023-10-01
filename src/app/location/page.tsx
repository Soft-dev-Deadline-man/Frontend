"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import { signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Rating from "../../components/Rating";
import Bookmark from "../../components/Bookmark";
import axios from "axios";
import AllImageModal from "../../components/AllImageModal";
import { IBlog } from "@/types/Blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLocationPin,
  faUser,
  faUserGroup,
  faBinoculars,
  faPhone,
  faBan,
  faBanSmoking,
  faMartiniGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import CommentBox from "../../components/CommentBox";
import { ICommentInfo } from "@/types/Comment";

const blogTemp: IBlog = {
  title: "เกาะขาม",
  catagory: "ชายหาด และทะเล",
  entrancePrice: {
    child: 50,
    adult: 100,
  },
  address: "เกาะขาม  235 ม.7 ต.บางพระ อ.ศรีราชา จ.ชลบุรี 20110",
  rating: "4.5",
  separateRating: {
    rate5: 5,
    rate4: 3,
    rate3: 0,
    rate2: 1,
    rate1: 1,
  },
  reviews: [
    { id: "id001" },
    { id: "id002" },
    { id: "id003" },
    { id: "id004" },
    { id: "id005" },
    { id: "id006" },
    { id: "id007" },
    { id: "id008" },
    { id: "id009" },
    { id: "id010" },
  ],
  latitude: "12.573091",
  longtitude: "100.9304664",
  forbidden: {
    animal: "ห้ามนำสัตว์เลี้ยงทุกชนิดเข้า",
  },
  contact: {
    tel: "038-318444 หรือ 0-3831-8444",
    facebook: "เกาะขาม - Koh Kham",
    ig: null,
  },
  image: [],
};

const commentTemp: Array<ICommentInfo> = [
  {
    blogId: "001",
    author: {
      name: "Taylor swift",
      img: "https://api.slingacademy.com/public/sample-photos/42.jpeg",
    },
    rating: 3,
    title: "หาดบางแสน new normal",
    description: `บางแสน new normal เสียงตามสายเขาว่างี้ วันนี้เปิดให้บริการเต็มตัว มีจุดคัดกรอง แต่ไม่มีคนมาคัด เตียงผ้าใบ และร้านอาหาร กลับมาเปิดทำการ ไม่มี social distancing นั่งกันตามอัธยาศัย
    เขารณรงค์ไม่ให้ใช้ภาชนะที่ทำจากโฟม ร้านค้าเปลี่ยนมาใช้จาน ชามจริงๆ แก้ว single use เปลี่ยนจากพลาสติกเป็นแก้วกระดาษ แต่ยังไม่ 100%
    เยื้องย่างเข้าไปที่หาดปั๊ป พ่อค้าขายของทันที นั่งเก้าอี้หาด เสียไป 150 บาท สั่งอาหาร น้ำ ต้องไปสั่งที่ร้านเอง เขาลิมิตไม่ให้คนขายเข้ามา คงช่วยลดความแออัด banana boat โดนัท กลับมาเปิดทำการ ที่กลับมาด้วยคือร่องรอยขยะเกยตื้นริมหาด `,
    recommendActivity: "รับประทานอาหารทะเล , ขับมอเตอร์ไซค์",
    spendTime: "ตลอดทั้งวัน",
    images: [
      "https://api.slingacademy.com/public/sample-photos/12.jpeg",
      "https://api.slingacademy.com/public/sample-photos/13.jpeg",
      "https://api.slingacademy.com/public/sample-photos/14.jpeg",
      "https://api.slingacademy.com/public/sample-photos/15.jpeg",
      "https://api.slingacademy.com/public/sample-photos/16.jpeg",
    ],
    score: 2,
  },
  {
    blogId: "002",
    author: {
      name: "Olivia rodrigo",
      img: "https://api.slingacademy.com/public/sample-photos/23.jpeg",
    },
    rating: 5,
    title: "Sunsets are my favorite color",
    description: `หาดบางแสน ชื่อสถานที่นี้ได้มาจากนิทานพื้นบ้านความรักของชายหนุ่มที่ชื่อ "แสน" กับหญิงสาวที่ชื่อ "สามมุข" ที่ไม่สมหวังในความรัก จึงพากันกระโดดน้ำตายและกลายเป็นชื่อสถานที่ต่าง ๆ ในตัวจังหวัดชลบุรี รวมถึงศาลเจ้าแม่สามมุข ที่อยู่ใกล้เคียงกันนั่นเองน้ำทะเลที่หาดบางแสนในช่วงระหว่างเดือนตุลาคมถึงเดือนกุมภาพันธ์ของปีถัดไป เป็นเวลาประมาณ 5 เดือน จะมีความใสเหมือนกับน้ำทะเลที่หาดทรายในต่างประเทศ เช่น มัลดีฟส์ โดยเป็นปรากฏการณ์ที่เกิดขึ้นเป็นประจำทุกปี`,
    recommendActivity: "รับประทานอาหารทะเล , ขับมอเตอร์ไซค์",
    spendTime: "ตลอดทั้งวัน",
    images: [
      "https://api.slingacademy.com/public/sample-photos/31.jpeg",
      "https://api.slingacademy.com/public/sample-photos/32.jpeg",
      "https://api.slingacademy.com/public/sample-photos/33.jpeg",
    ],
    score: 5,
  },
];

export default function Login() {
  const router = useRouter();
  const [imgArray, setImgArray] = useState<any[]>([]);
  const [showImage, setShowImage] = useState<boolean>(false);

  const containerStyle = {
    width: "100%",
    height: "250px",
    borderRadius: "38px",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAURPv2U0fzw17NkOYT3Mt__HvRrlQwriE",
  });

  const fetchData = async () => {
    await axios
      .get(
        "https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=50"
      )
      .then((res) => {
        const response = res.data.photos;
        const userValues = response.map((item: any) => item.url);
        setImgArray(userValues);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (showImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showImage]);

  const handleShowImage = () => {
    setShowImage(true);
  };

  const calRating = useMemo(() => {
    return {
      rating1: `${
        (parseInt(blogTemp.separateRating.rate1) / blogTemp.reviews.length) *
        100
      }%`,
      rating2: `${
        (parseInt(blogTemp.separateRating.rate2) / blogTemp.reviews.length) *
        100
      }%`,
      rating3: `${
        (parseInt(blogTemp.separateRating.rate3) / blogTemp.reviews.length) *
        100
      }%`,
      rating4: `${
        (parseInt(blogTemp.separateRating.rate4) / blogTemp.reviews.length) *
        100
      }%`,
      rating5: `${
        (parseInt(blogTemp.separateRating.rate5) / blogTemp.reviews.length) *
        100
      }%`,
    };
  }, []);

  return imgArray.length ? (
    <div className="w-full min-h-screen flex flex-col items-center font-karnit">
      <div className="pt-16 w-full grid grid-rows-6 lg:grid-cols-8 grid-cols-6 gap-1 h-[450px] max-w-screen-xl cursor-pointer px-4" onClick={()=>handleShowImage()}>
        <div className="lg:row-span-6 lg:col-span-4  md:row-span-3  row-span-4 col-span-3 relative">
          <Image alt="img1" src={imgArray[0]} fill sizes="100vw"></Image>
        </div>
        <div className="lg:row-span-6 lg:col-span-2  md:row-span-3  row-span-4 col-span-3 relative">
          <Image alt="img2" src={imgArray[1]} fill sizes="100vw"></Image>
        </div>
        <div className="lg:row-span-3 lg:col-span-1  md:row-span-3  row-span-2 col-span-2 relative">
          <Image alt="img3" src={imgArray[2]} fill sizes="100vw"></Image>
        </div>
        <div className="lg:row-span-3 lg:col-span-1  md:row-span-3  row-span-2 col-span-2 relative">
          <Image alt="img4" src={imgArray[3]} fill sizes="100vw"></Image>
        </div>
        <div className="lg:row-span-3 lg:col-span-1  md:row-span-3  row-span-2 col-span-2 relative">
          <div className="lg:hidden absolute z-30 bg-black/[0.25] w-full h-full flex justify-center items-center text-white">
            {imgArray.length - 5}+
          </div>
          <Image alt="img4" src={imgArray[4]} fill sizes="100vw"></Image>
        </div>
        <div className="lg:row-span-3 lg:col-span-1 hidden lg:block relative">
          <div className="absolute z-30 bg-black/[0.25] w-full h-full flex justify-center items-center text-white">
            {imgArray.length - 6}+
          </div>
          <Image alt="img4" src={imgArray[5]} fill sizes="100vw"></Image>
        </div>
      </div>
      <div className="flex w-full max-w-screen-xl">
        <div className="lg:w-[60%] w-full px-4">
          <div className="bg-[#F8F8F8] w-full p-6 flex flex-col rounded-xl my-3">
            <h1 className="text-2xl">{blogTemp.title}</h1>
            <div className="flex items-center my-2">
              <div className="p-1 px-2 flex items-center mr-2 bg-[#FF6F6B] rounded-xl text-white">
                <h4 className="mr-1">{blogTemp.rating}</h4>
                <FontAwesomeIcon icon={faStar} style={{ color: "#ffffff" }} />
              </div>
              {blogTemp.reviews.length} รีวิว
            </div>
            <h3 className="text-[#8A8A8A] my-2">{blogTemp.catagory}</h3>
            <div className=" border-b-2 border-[#D9D9D9] w-full my-2"></div>
            <div className="flex my-2">
              <div className="p-2 flex bg-[#276968] items-center text-white rounded-xl mr-2">
                <FontAwesomeIcon
                  icon={faMessage}
                  style={{ color: "#ffffff" }}
                  className="mr-2"
                />{" "}
                เขียนรีวิว
              </div>
              <Bookmark blogID="0" />
            </div>
          </div>

          <div className="bg-[#F8F8F8] w-full p-6 flex flex-col rounded-xl my-3">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={{
                  lat: parseFloat(blogTemp.latitude),
                  lng: parseFloat(blogTemp.longtitude),
                }}
                zoom={9}
                options={{ disableDefaultUI: true }}
              >
                <MarkerF
                  position={{
                    lat: parseFloat(blogTemp.latitude),
                    lng: parseFloat(blogTemp.longtitude),
                  }}
                  onClick={() =>
                    router.push(
                      `http://maps.google.com/maps?z=12&t=m&q=loc:${blogTemp.latitude}+${blogTemp.longtitude}`
                    )
                  }
                />
              </GoogleMap>
            ) : (
              ""
            )}
            <div className="flex items-center my-2">
              <FontAwesomeIcon
                icon={faLocationPin}
                style={{ color: "#37454D" }}
              />{" "}
              <p className="text-[#8A8A8A] ml-1">{blogTemp.address}</p>
            </div>
          </div>
          <div className="bg-[#F8F8F8] w-full p-6 rounded-xl my-3 flex justify-center items-center relative">
            <div className="absolute top-3 left-7">
              <h3 className="text-lg">{blogTemp.reviews.length} รีวิว</h3>
            </div>
            <div className="flex items-center flex-wrap justify-center w-full">
              <div className="flex flex-col items-center mr-3">
                <h1 className="text-5xl">{blogTemp.rating}</h1>
                <h3>จาก 5</h3>
              </div>
              {calRating ? (
                <div className="sm:w-[60%] w-full">
                  <div className="flex my-2">
                    <Rating
                      rating={5}
                      vote={false}
                      setVote={null}
                      size="text-xl"
                      mx="mx-1"
                    />
                    <div className="grow bg-[#D9D9D9] h-5 rounded-xl overflow-hidden">
                      <div
                        className={`bg-[#FF6F6B] z-20 h-5 rounded-xl`}
                        style={{ width: `${calRating.rating5}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <Rating
                      rating={4}
                      vote={false}
                      setVote={null}
                      size="text-xl"
                      mx="mx-1"
                    />
                    <div className="grow bg-[#D9D9D9] h-5 rounded-xl overflow-hidden">
                      <div
                        className={`bg-[#FF6F6B] z-20 h-5 rounded-xl`}
                        style={{ width: `${calRating.rating4}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <Rating
                      rating={3}
                      vote={false}
                      setVote={null}
                      size="text-xl"
                      mx="mx-1"
                    />
                    <div className="grow bg-[#D9D9D9] h-5 rounded-xl overflow-hidden">
                      <div
                        className={`bg-[#FF6F6B] z-20 ${calRating.rating3} h-5 rounded-xl`}
                        style={{ width: `${calRating.rating3}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <Rating
                      rating={2}
                      vote={false}
                      setVote={null}
                      size="text-xl"
                      mx="mx-1"
                    />
                    <div className="grow bg-[#D9D9D9] h-5 rounded-xl overflow-hidden">
                      <div
                        className={`bg-[#FF6F6B] z-20 ${calRating.rating2} h-5 rounded-xl`}
                        style={{ width: `${calRating.rating2}` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex my-2">
                    <Rating
                      rating={1}
                      vote={false}
                      setVote={null}
                      size="text-xl"
                      mx="mx-1"
                    />
                    <div className="grow bg-[#D9D9D9] h-5 rounded-xl overflow-hidden">
                      <div
                        className={`bg-[#FF6F6B] z-20 ${calRating.rating1} h-5 rounded-xl`}
                        style={{ width: `${calRating.rating1}` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="w-[40%] hidden lg:block text-[#8A8A8A] px-4">
          <div className="p-6 bg-[#F8F8F8] rounded-xl my-3">
            <div className="mb-5">
              <div className="px-5 py-2 bg-[#276968] text-white w-fit rounded-xl">
                <h2>อัตราค่าบริการ</h2>
              </div>
              <div>
                {Object.entries(blogTemp.entrancePrice).map(([key, value]) => {
                  return (
                    <div key={key}>
                      {key === "adult" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          ผู้ใหญ่ : {value}
                        </div>
                      ) : key === "child" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faUserGroup}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          เด็ก : {value}
                        </div>
                      ) : key === "foreign" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faBinoculars}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          ชาวต่างชาติ : {value}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="my-5">
              <div className="px-5 py-2 bg-[#276968] text-white w-fit rounded-xl">
                <h2>ช่องทางการติดต่อ</h2>
              </div>
              <div>
                {Object.entries(blogTemp.contact).map(([key, value]) => {
                  return (
                    <div key={key}>
                      {key === "facebook" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faFacebook}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          Facebook : {value}
                        </div>
                      ) : key === "tel" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faPhone}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          เบอร์โทรศัพท์ : {value}
                        </div>
                      ) : key === "ig" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          Instagram : {value}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="my-5">
              <div className="px-5 py-2 bg-[#276968] text-white w-fit rounded-xl">
                <h2>สิ่งต้องห้าม</h2>
              </div>
              <div>
                {Object.entries(blogTemp.forbidden).map(([key, value]) => {
                  return (
                    <div key={key}>
                      {key === "animal" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faBan}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          {value}
                        </div>
                      ) : key === "smoke" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faBanSmoking}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          {value}
                        </div>
                      ) : key === "alcohol" && value != null ? (
                        <div className="my-2">
                          <FontAwesomeIcon
                            icon={faMartiniGlass}
                            style={{ color: "#276968" }}
                            className="w-[32px] h-[32px] mr-1"
                          />
                          {value}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
      </div>
      <div className="w-full max-w-screen-xl px-4">
        {commentTemp.map((val, key) => {
          return <CommentBox commentInfo={val} key={key} />;
        })}
      </div>
      {showImage ? (
        <AllImageModal photos={imgArray} setShow={setShowImage} />
      ) : (
        ""
      )}
    </div>
  ) : (
    <div>null</div>
  );
}
