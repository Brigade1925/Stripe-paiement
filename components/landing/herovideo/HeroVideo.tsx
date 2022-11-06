import { t } from '@lingui/macro';
export interface IHeroVideo {
  videoUrl: string;
}

const HeroVideo: React.FC<IHeroVideo> = ({
  videoUrl = 'assets/videos/lemma_2.mp4',
}) => {
  return (
    <section
      className="relative h-screen 
    max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] xl:max-h-[900px] 
    flex flex-col items-center justify-center text-center text-white py-0 px-0 w-full max-w-[2000px]"
    >
      <div className="video-docker absolute w-full max-w-full h-full overflow-hidden top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] ">
        <video
          className="min-w-full min-h-full absolute object-cover top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]
          after:content-none after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-slate-300/75"
          // src="https://josecuono.dev/video1.mp4"
          src={videoUrl}
          typeof="video/mp4"
          autoPlay
        ></video>
      </div>
      <div className="flex flex-col items-center justify-center video-content space-y-2 text-white z-10 w-full h-full">
        <div className="p-4 sm:p-8 lg:p-16 bg-gray-800/50 rounded-2xl space-y-5">
          <h1 className="font-bold font-bebas text-4xl lg:text-7xl justify-center">
            <p>{t`hero_vid_title`} </p>
          </h1>
          <h3 className="font-thin font-glory text-2xl lg:text-4xl text-red-300">
            <p>{t`hero_vid_description`} </p>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
