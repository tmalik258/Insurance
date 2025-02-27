import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ThumbsUp, Play } from 'lucide-react';

const AmericanModern: React.FC = () => {
  const leadershipTeam = [
    {
      name: "Andreas Kleiner",
      title: "Chief Executive Officer",
      image: "/images/leaders/andreas-kleiner.jpg"
    },
    {
      name: "Kate Reed",
      title: "Head of Human Resources",
      image: "/images/leaders/kate-reed.jpg"
    },
    {
      name: "Trey Griffith",
      title: "General Counsel",
      image: "/images/leaders/trey-griffith.jpg"
    },
    {
      name: "René Goboniya",
      title: "Chief Financial Officer",
      image: "/images/leaders/rene-goboniya.jpg"
    },
    {
      name: "Eric Hunziker",
      title: "Head of Claims",
      image: "/images/leaders/eric-hunziker.jpg"
    },
    {
      name: "Kamalesh \"Kam\" Jha",
      title: "Chief Underwriting Officer",
      image: "/images/leaders/kamalesh-jha.jpg"
    },
    {
      name: "Kevin Morreale",
      title: "Chief Sales and Marketing Officer",
      image: "/images/leaders/kevin-morreale.jpg"
    },
    {
      name: "Paul Schneider",
      title: "Chief Operating Officer",
      image: "/images/leaders/paul-schneider.jpg"
    }
  ];

  const historyTimeline = [
    {
      period: "1922 - 1983",
      content: "Starting with a founding agricultural insurance co. pioneered by Farmers, the company extends as American Modern. A testament to visionary beginning, steadily building foundations for future growth."
    },
    {
      period: "1985 - 1995",
      content: "Building on the success of initial niche markets, the company expands its product offerings with innovative and revolutionary techniques tailored to the customer. Emerging with a new identity, American Modern grows steadily through market diversification. Key partnerships are established, with new core lines of the company launched."
    },
    {
      period: "1995-2010",
      content: "American Modern continues to grow and transform. New territories are explored, new markets are captured, new technologies are implemented. Geographic expansion. Both organic growth and strategic mergers help American Modern thrive."
    },
    {
      period: "2010",
      content: "American Modern is acquired by Munich Re in a strategic move. The company values its heritage while looking to the future with renewed ambition and expanded risk sharing capabilities."
    },
    {
      period: "2012",
      content: "American Modern's complete move of operations demonstrates a sense that support. Facility expansion reflects the ongoing commitment to employees, featuring innovative designs, enhanced amenities, and improved collaborative spaces."
    },
    {
      period: "2014",
      content: "American Modern welcomed AmGUARD™ in to its organization and integrated personal lines. The move enhanced distribution, streamlined operations, and unified platforms while preserving customer relationships."
    },
    {
      period: "2022",
      content: "American Modern celebrates 100-year lifespan as an established industry presence honoring the legacy."
    }
  ];

  const recommendedArticles = [
    {
      title: "Digitalization, interconnected scale create interactions that add value",
      description: "Discover how digital transformation can drive up efficiency, agility and connectivity with Munich Re.",
      link: "#"
    },
    {
      title: "What matters most to this insurance executive?",
      description: "Listen to Christine Benhamou-Seraille, Chief of Compliance, talk about why her work matters to her.",
      link: "#"
    },
    {
      title: "Global future convergences will shape the decade",
      description: "What 'megatrends' across the macro-environment? Podcast from the Global Executive Network",
      link: "#"
    }
  ];

  return (
    <>
      <section className="relative w-full bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 z-10">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                American Modern
              </h1>
              <p className="text-2xl md:text-3xl text-gray-800 mb-8">
                Find out who we are & how you could be a great fit.
              </p>
              <Link href="/apply">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded transition duration-300">
                  Apply now
                </button>
              </Link>
              
              <div className="flex mt-8 space-x-2">
                <div className="h-2 w-2 bg-blue-600 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Team members in a modern office setting"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">About us</h2>
              
              <nav className="flex flex-col space-y-4">
                <Link href="#company" className="text-lg font-medium text-gray-700 hover:text-blue-600 border-l-4 border-blue-600 pl-4">
                  Company
                </Link>
                <Link href="#culture" className="text-lg font-medium text-gray-700 hover:text-blue-600 pl-4">
                  Culture
                </Link>
                <Link href="#careers" className="text-lg font-medium text-gray-700 hover:text-blue-600 pl-4">
                  Careers
                </Link>
              </nav>
            </div>
            
            <div className="md:w-3/4 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
              
              <div className="space-y-6 text-gray-700">
                <p className="text-lg">
                  American Modern Insurance Group, Inc., a Munich Re company, is a widely 
                  recognized specialty insurance leader that delivers products and services for 
                  residential property – such as manufactured homes and specialty dwellings – and the 
                  recreational market, including boats, personal watercraft, classic cars, and more. We 
                  provide specialty product solutions that cover what the competition often can't. We 
                  write admitted products in all 50 states and have a premium volume of $2.2 billion.
                </p>
                
                <p className="text-lg">
                  Headquartered in Amelia, Ohio, and with associates located across the United States, 
                  we are part of Munich Re's Global Specialty Insurance division. Our employees 
                  receive boundless opportunity to grow their careers and make a difference every day 
                  - all in a flexible environment that helps them succeed both at work and at home.
                </p>
              </div>
              
              <div className="mt-8">
                <Link href="/careers">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded transition duration-300">
                    Find your place at American Modern
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Rating</h2>
          <div className="flex items-center">
            <ThumbsUp className="text-white mr-3" size={24} />
            <p className="text-white text-lg">
              The companies of American Modern Insurance Group are rated A+ (Superior) by A.M. Best.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Click below to meet our leadership team</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {leadershipTeam.map((leader, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 rounded-full overflow-hidden w-32 h-32">
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.title}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-600">{leader.name}</h3>
                <p className="text-gray-600">{leader.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our history</h2>
          
          <div className="relative">
            
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {historyTimeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">{item.period}</h3>
                    <p className="text-gray-700">{item.content}</p>
                  </div>
                </div>
                
                
                <div className="w-2/12 flex justify-center">
                  <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white z-10"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 pr-0 md:pr-8 mb-12 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Featured news</h2>
              
              <div className="mb-6">
                <div className="relative mb-4 rounded overflow-hidden">
                  <Image 
                    src="/images/news/iba-hot-100.jpg" 
                    alt="IBA HOT 100" 
                    width={500} 
                    height={280} 
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="bg-white bg-opacity-80 rounded-full p-3">
                      <Play className="text-blue-600" size={28} />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <span className="text-white font-semibold px-2 py-1 rounded bg-blue-600 text-xs">Corporate News</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold mb-2">
                  Andreas Kleiner, president and CEO, American Modern recognized by Insurance Business America regarding the company's success transformation efforts.
                </h3>
              </div>
              
              <Link href="/news">
                <button className="border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-50 transition duration-300">
                  See all news
                </button>
              </Link>
            </div>

            <div className="md:w-1/2 pl-0 md:pl-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2">Recommended articles</h2>
              
              <div className="space-y-6">
                {recommendedArticles.map((article, index) => (
                  <div key={index} className="border-b pb-6 last:border-b-0">
                    <Link href={article.link}>
                      <h3 className="text-lg font-bold text-blue-600 hover:underline mb-2">{article.title}</h3>
                    </Link>
                    <p className="text-gray-700 mb-2">{article.description}</p>
                    <Link href={article.link} className="text-blue-600 text-sm font-medium hover:underline">
                      Read more →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Push boundaries. With us.</h2>
                <Link href="/careers">
                  <button className="border border-blue-600 text-blue-600 font-medium py-2 px-6 rounded hover:bg-blue-50 transition duration-300">
                    Explore career opportunities
                  </button>
                </Link>
              </div>
              <div className="md:w-1/3">
                <Image 
                  src="/images/career-woman.jpg" 
                  alt="Woman smiling" 
                  width={400} 
                  height={300} 
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmericanModern;