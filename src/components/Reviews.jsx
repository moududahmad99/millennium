import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: "Raul Reyes",
    content: "The workouts are intense and phenomenal. Each class is well-structured, combining conditioning, bag work, and technical drills. I've been attending for a little over a months now, and the improvement in my stamina, strength, and confidence is significant. The facility itself is top-notch: clean, well-maintained equipment, plenty of heavy bags, and a great ring. The scheduling is flexible, and the membership is a great value for the quality of instruction you receive. I workout with Ofacio who’s amazing trainer. Highly recommend him.",
    rating: 5
  },
  {
    name: "Leo Clark jr.",
    content: "This gym is great. Really nice cardio and strength training equipment to compliment the hardcore boxing sector of the gym. I dealt with Ofacio, who I believe may be one of if not the owner. I can’t say enough about the passion he has for the place and his personal integrity. His team is right there as well. Great spot in town. Thanks again Millenium Boxing and Fitness!",
    rating: 5
  },
  {
    name: "Zaki Uddin",
    content: "Millennium is a great boxing gym for those who are serious about boxing or who just want to get in good shape. Depending on your goal, the coaches are very accommodating and will cater to each individuals needs. The coaches are very knowledgeable and have extensive experience in the sport. The environment is very friendly and not intimidating like you may find in other gyms. Everyone is respectful and easy going. It's the perfect balance.",
    rating: 5
  },
  {
    name: "Cristina Acevedo",
    content: "Just joined the gym about a week ago for a reasonable monthly rate, but the space reminds me of a private gym that would cost so much more. From open gym, to training, to boxing; they have so many options for people to stay moving. I love that I've come to a place where I can really push myself without the crowd of a more commercialized gym. The owners and employees are so courteous and supportive too, which makes the welcome all that more meaningful. Equipment is top notch and the sauna is so cozy ☺️",
    rating: 5
  },
  {
    name: "Andrew",
    content: "This is 100% the best boxing gym in the Bronx, All of the coaches are very respectful and determined to help YOU reach your fitness goals/Boxing goals. Sign up asap if your looking for a boxing gym",
    rating: 5
  },
  {
    name: "Justina",
    content: "Great coaching, equipment and environment. A facility that’s welcoming for men, women and children. The staff is knowledgeable and will teach you REAL boxing and strength training. I do privates with Ofacio and have seen amazing results. Definitely check them out!",
    rating: 5
  },
  {
    name: "Eloy Diaz",
    content: "Great gym, lots of cardio machines, bags, dumbells up to 95 lbs, and much more things to mention. Overall great place with a great price for all your fitness and boxing necesities. Trainers also all seem to be very well experienced !",
    rating: 5
  }
];

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextReview = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="py-24 bg-brand-deep relative overflow-hidden">
      {/* Background Cinematic Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none opacity-[0.02] select-none">
        <h2 className="text-[25vw] font-display font-black text-white italic whitespace-nowrap leading-none uppercase">
          RESPECT
        </h2>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-brand-teal" />
              <span className="text-brand-teal font-black uppercase tracking-[0.5em] text-[10px]">THE SYNDICATE</span>
              <div className="h-[1px] w-12 bg-brand-teal" />
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black text-white italic tracking-tighter uppercase leading-none">
              MEMBER <br /> <span className="text-stroke">VERDICTS</span>
            </h2>
          </div>

          {/* Slider Container */}
          <div className="relative h-[500px] md:h-[400px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 border border-white/10 p-12 md:p-16 relative group glass-morphism h-[450px] flex flex-col justify-between">
                  <Quote className="text-brand-teal/20 absolute top-8 left-8" size={80} />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex gap-1 mb-6">
                      {[...Array(reviews[index].rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-brand-teal text-brand-teal" />
                      ))}
                    </div>

                    <div className="flex-grow overflow-hidden mb-8">
                      <div
                        data-lenis-prevent
                        className="h-full overflow-y-auto pr-4 custom-scrollbar"
                      >
                        <p className="text-white/80 text-lg md:text-xl font-light italic leading-relaxed">
                          "{reviews[index].content}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 mt-auto pt-6 border-t border-white/5">
                      <div className="h-px w-12 bg-brand-teal" />
                      <div>
                        <h4 className="text-white font-display font-black text-xl md:text-2xl uppercase tracking-tighter italic whitespace-nowrap">
                          {reviews[index].name}
                        </h4>
                        <span className="text-brand-teal text-[10px] font-black uppercase tracking-widest">Verified Member</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-12">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-1 transition-all duration-500 ${i === index ? 'w-12 bg-brand-teal' : 'w-4 bg-white/10 hover:bg-white/30'
                    }`}
                />
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevReview}
                className="w-16 h-16 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-brand-deep transition-all duration-500 group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={nextReview}
                className="w-16 h-16 bg-brand-teal flex items-center justify-center text-brand-deep hover:bg-white transition-all duration-500 group"
              >
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
