  "use strict";

let bandImage = "";
let bandName = "";
let bandInfo = "";
let selectedValue = "";
console.log(`This is the established js script`);
console.log(`Selected Value at start of script is ${selectedValue}`);
console.log(`Selected Value is set to value of "band"`);
selectedValue = document.getElementById("band").value;
console.log(`Selected Value is now ${selectedValue}`);
console.log("");

function checkBand(selectedValue) {
  console.log(`The checkBand function is being executed now`);

  switch (selectedValue) {
    case "Beatles":
      console.log(`In Beatles area, selected value is ${selectedValue}`);
      bandImage = "Beatles_early days.jpg";
      bandName = "Beatles";
      bandInfo = `The Beatles were an English rock band formed in Liverpool in 1960, comprising John Lennon, Paul McCartney, George Harrison and Ringo Starr. They are regarded as the most influential band of all time and were integral to the development of 1960s counterculture and the recognition of popular music as an art form. Rooted in skiffle, beat and 1950s rock 'n' roll, their sound incorporated elements of classical music and traditional pop in innovative ways. The band also explored music styles ranging from folk and Indian music to psychedelia and hard rock. As pioneers in recording, songwriting and artistic presentation, the Beatles revolutionized many aspects of the music industry and were often publicized as leaders of the era's youth and sociocultural movements.

      Led by primary songwriters Lennon and McCartney, the Beatles evolved from Lennon's previous group, the Quarrymen, and built their reputation by playing clubs in Liverpool and Hamburg over three years from 1960, initially with Stuart Sutcliffe playing bass. The core trio of Lennon, McCartney and Harrison, together since 1958, went through a succession of drummers, including Pete Best, before inviting Starr to join them in 1962. Manager Brian Epstein moulded them into a professional act, and producer George Martin guided and developed their recordings, greatly expanding their domestic success after they signed with EMI Records and achieved their first hit, "Love Me Do", in late 1962. As their popularity grew into the intense fan frenzy dubbed "Beatlemania", the band acquired the nickname "the Fab Four". Epstein, Martin or another member of the band's entourage was sometimes informally referred to as a "fifth Beatle".
      
      By early 1964, the Beatles were international stars and had achieved unprecedented levels of critical and commercial success. They became a leading force in Britain's cultural resurgence, ushering in the British Invasion of the United States pop market. They soon made their film debut with A Hard Day's Night (1964). A growing desire to refine their studio efforts, coupled with the challenging nature of their concert tours, led to the band's retirement from live performances in 1966. During this time, they produced albums of greater sophistication, including Rubber Soul (1965), Revolver (1966) and Sgt. Pepper's Lonely Hearts Club Band (1967). They enjoyed further commercial success with The Beatles (also known as "the White Album", 1968) and Abbey Road (1969). The success of these records heralded the album era, as albums became the dominant form of record use over singles. These records also increased public interest in psychedelic drugs and Eastern spirituality and furthered advancements in electronic music, album art and music videos. In 1968, they founded Apple Corps, a multi-armed multimedia corporation that continues to oversee projects related to the band's legacy. After the group's break-up in 1970, all principal former members enjoyed success as solo artists, and some partial reunions have occurred. Lennon was murdered in 1980, and Harrison died of lung cancer in 2001. McCartney and Starr remain musically active.
      
      The Beatles are the best-selling music act of all time, with estimated sales of 600 million units worldwide. They are the most successful act in the history of the US Billboard charts, holding the record for most number-one albums on the UK Albums Chart (15), most number-one hits on the US Billboard Hot 100 chart (20), and most singles sold in the UK (21.9 million). The band received many accolades, including seven Grammy Awards, four Brit Awards, an Academy Award (for Best Original Song Score for the 1970 documentary film Let It Be) and fifteen Ivor Novello Awards. They were inducted into the Rock and Roll Hall of Fame in their first year of eligibility, 1988, and each principal member was individually inducted between 1994 and 2015. In 2004 and 2011, the group topped Rolling Stone's lists of the greatest artists in history. Time magazine named them among the 20th century's 100 most important people.`;
      bandFunction();
      break;

    case "Billy Idol":
      console.log(`In Billy Idol area, selected value is ${selectedValue}`);
      bandImage = "Billy Idol.jpg";
      bandName = "Billy Idol";
      bandInfo = `William Michael Albert Broad (born 30 November 1955), known professionally as Billy Idol, is an English-American singer, songwriter, musician and actor. He first achieved fame in the 1970s emerging from the London punk rock scene as the lead singer of the group Generation X. Subsequently, he embarked on a solo career which led to international recognition and made Idol a lead artist during the MTV-driven "Second British Invasion" in the US. The name "Billy Idol" was inspired by a schoolteacher's description of him as "idle".
      
      Idol began his music career in late 1976 as a guitarist in the punk rock band Chelsea. However, he soon left the group. With his former bandmate Tony James, Idol formed Generation X. With Idol as lead singer, the band achieved success in the United Kingdom and released three studio albums on Chrysalis Records, then disbanded. In 1981, Idol moved to New York City to pursue his solo career in collaboration with guitarist Steve Stevens. His debut studio album, Billy Idol (1982), was a commercial success. With music videos for singles "Dancing with Myself" and "White Wedding" Idol soon became a staple of then newly-established MTV.
      
      Idol's second studio album, Rebel Yell (1983), was a major commercial success, featuring hit singles "Rebel Yell" and "Eyes Without a Face". The album was certified double platinum by the Recording Industry Association of America (RIAA) for shipment of two million copies in the US. In 1986, he released Whiplash Smile. Having accumulated three UK top 10 singles ("Rebel Yell", "White Wedding" and "Mony Mony") Idol released a 1988 greatest hits album titled Idol Songs: 11 of the Best; the album went platinum in the United Kingdom. Idol then released Charmed Life (1990) and the concept album Cyberpunk (1993).
      
      Idol spent the second half of the 1990s focusing on his personal life out of the public eye. He made a musical comeback with the release of Devil's Playground (2005) and again with Kings & Queens of the Underground (2014).`;
      bandFunction();
      break;

    case "David Bowie":
      console.log(`In David Bowie area, selected value is ${selectedValue}`);
      bandImage = "David Bowie1.jpg";
      bandName = "David Bowie";
      bandInfo = `David Robert Jones (8 January 1947 – 10 January 2016), known professionally as David Bowie, was an English singer, songwriter, musician, and actor. He is regarded as one of the most influential musicians of the 20th century. Bowie was acclaimed by critics and musicians, particularly for his innovative work during the 1970s. His career was marked by reinvention and visual presentation, and his music and stagecraft had a significant impact on popular music.

      Bowie developed an interest in music from an early age. He studied art, music and design before embarking on a professional career as a musician in 1963. He released a string of unsuccessful singles with local bands and a solo album before achieving his first top-five entry on the UK Singles Chart with "Space Oddity" (1969). After a period of experimentation, he re-emerged in 1972 during the glam rock era with the flamboyant and androgynous alter ego Ziggy Stardust. The character was spearheaded by the success of "Starman" and album The Rise and Fall of Ziggy Stardust and the Spiders from Mars, which won him widespread popularity. In 1975, Bowie's style shifted towards a sound he characterised as "plastic soul", initially alienating many of his UK fans but garnering his first major US crossover success with the number-one single "Fame" and the album Young Americans. In 1976, Bowie starred in the cult film The Man Who Fell to Earth and released Station to Station. In 1977, he again changed direction with the electronic-inflected album Low, the first of three collaborations with Brian Eno that came to be known as the Berlin Trilogy. "Heroes" (1977) and Lodger (1979) followed; each album reached the UK top five and received lasting critical praise.
      
      After uneven commercial success in the late 1970s, Bowie had three number-one hits: the 1980 single "Ashes to Ashes", its album Scary Monsters (and Super Creeps) and "Under Pressure" (a 1981 collaboration with Queen). He achieved his greatest commercial success in the 1980s with Let's Dance (1983). Between 1988 and 1992, he fronted the hard rock band Tin Machine before resuming his solo career in 1993. Throughout the 1990s and 2000s, Bowie continued to experiment with musical styles, including industrial and jungle. He also continued acting; his roles included Major Jack Celliers in Merry Christmas, Mr. Lawrence (1983), Jareth the Goblin King in Labyrinth (1986), Phillip Jeffries in Twin Peaks: Fire Walk with Me (1992), Andy Warhol in the biopic Basquiat (1996), and Nikola Tesla in The Prestige (2006), among other film and television appearances and cameos. He stopped touring after 2004 and his last live performance was at a charity event in 2006. He returned from a decade-long recording hiatus in 2013 with The Next Day and remained musically active until his death from liver cancer in 2016. He died two days after both his 69th birthday and the release of his final album, Blackstar.
      
      During his lifetime, his record sales, estimated at over 100 million records worldwide, made him one of the best-selling musicians of all time. Often dubbed the "chameleon of rock" due to his constant musical reinventions, he was inducted into the Rock and Roll Hall of Fame in 1996. Rolling Stone ranked him among the greatest artists in history. As of 2022, Bowie was the best-selling vinyl artist of the 21st century.`;
      bandFunction();
      break;

    case "Duran Duran":
      console.log(`In Duran Duran area, selected value is ${selectedValue}`);
      bandImage = "Duran Duran.jpg";
      bandName = "Duran Duran";
      bandInfo = `Duran Duran are an English pop rock band formed in Birmingham in 1978 by singer Stephen Duffy, keyboardist Nick Rhodes and guitarist/bassist John Taylor. With the addition of bassist Simon Colley and drummer Roger Taylor the following year, the band went through numerous personnel changes before May 1980, when they settled on their most famous line-up by adding guitarist Andy Taylor and lead vocalist Simon Le Bon.

      Emerging as members of the New Romantic scene, Duran Duran were innovators of the music video and a leading band in the MTV-driven Second British Invasion of the US in the 1980s. By 1984, the band had achieved levels of fame similar to Beatlemania. The band's first major hit was "Girls on Film" (1981), from their self-titled debut album, the popularity of which was enhanced by a controversial music video. The band's breakthrough second album was Rio (1982), a worldwide hit. The songs "Hungry Like the Wolf" and "Rio" featured cinematic music videos directed by Australian film maker Russell Mulcahy and became two of their biggest hits. Their third album, Seven and the Ragged Tiger, became their only UK number one album and featured the US and UK number one single "The Reflex". In 1985, the band topped the US charts with the single "A View to a Kill" from the soundtrack of the James Bond film of the same title.
      
      Andy Taylor and Roger Taylor left the band before the recording of their fourth album, Notorious (1986), which yielded the top ten title track; Warren Cuccurullo replaced Andy as guitarist. The band spent the rest of the 1980s and early 1990s continuing to release albums and singles to only moderate success. Their comeback album, 1993's Duran Duran (commonly called The Wedding Album), featured two top-ten worldwide hits "Ordinary World" and "Come Undone". After John Taylor left in 1997, the band released a number of albums and singles which underperformed on the sales charts. A full reunion of the line-up of Le Bon, Rhodes and all three Taylors in 2001 led to a number of highly successful concert tours and the 2004 album Astronaut, which reached number three in the UK and top 40 in numerous other countries. The album's lead single "(Reach Up for The) Sunrise" was an international dance hit, and reached number five in the UK. Andy Taylor left again in 2006, and the band have released five additional albums, with the most recent being Danse Macabre in 2023.
      
      According to Billboard, Duran Duran have sold over 100 million records. They achieved 30 top 40 singles in the UK Singles Chart (14 of them top 10) and 21 top 40 singles in the US Billboard Hot 100. The band have won numerous awards throughout their career: two Brit Awards including the 2004 award for Outstanding Contribution to Music, two Grammy Awards, an MTV Video Music Award for Lifetime Achievement and a Video Visionary Award from the MTV Europe Music Awards. They were also awarded a star on the Hollywood Walk of Fame. The band were inducted into the Rock & Roll Hall of Fame in 2022.`;
      bandFunction();
      break;

    case "Hollies":
      bandImage = "Hollies.jpg";
      bandName = "Hollies";
      bandInfo = `The Hollies are an English rock and pop band formed in 1962. One of the leading British groups of the 1960s and into the mid-1970s, they are known for their distinctive three-part vocal harmony style. Allan Clarke and Graham Nash founded the band as a Merseybeat-type group in Manchester, although some of the band members came from towns further north, in east Lancashire. Nash left the group in 1968 to form Crosby, Stills & Nash, though he has reunited with the Hollies on occasion.

      They enjoyed considerable popularity in the UK and Europe during the mid-1960s with a string of hits that included "Just One Look", "Here I Go Again" (both 1964), "I'm Alive" (1965; their first of two UK number ones), "Look Through Any Window" (1965) and "I Can't Let Go" (1966), although they did not achieve US chart success until "Bus Stop" was released in 1966. The group went on to have periodic success on both sides of the Atlantic Ocean over the next decade with hits such as "Stop Stop Stop" (1966), "On a Carousel", "Carrie Anne" (both 1967), "He Ain't Heavy, He's My Brother" (1969), "Long Cool Woman in a Black Dress" (1972) and "The Air That I Breathe" (1974). "He Ain't Heavy" reached number one on the UK Singles Chart following a 1988 re-release. Overall, the Hollies had over 30 charting singles reach the UK Singles Chart, 22 on the US Billboard Hot 100, and 21 on the chart of RPM magazine in Canada.
      
      The Hollies are one of the few UK groups of the early 1960s, along with the Rolling Stones, who have never disbanded and continue to record and perform. In recognition of their achievements, the Hollies were inducted into the Rock and Roll Hall of Fame in 2010.`;
      bandFunction();
      break;

    case "Monkees":
      bandImage = "Monkees-1966.JPG";
      bandName = "Monkees";
      bandInfo = `The Monkees were an American pop rock band formed in Los Angeles in the mid-1960s. The band consisted of Micky Dolenz, Davy Jones, Michael Nesmith, and Peter Tork. Spurred by the success of the television show of the same name, the Monkees were one of the most successful bands of the late 1960s. With international hits, four chart-topping albums and three chart-topping songs ("Last Train to Clarksville", "I'm a Believer", and "Daydream Believer"), they sold more than 75 million records worldwide.

      The Monkees were originally a fictional band created for the NBC television sitcom of the same name. Dolenz, Jones, Nesmith and Tork were cast to portray members of a band in the sitcom. Music credited to the Monkees appeared in the sitcom and was released on LPs and singles beginning in 1966, and the sitcom aired from 1966 to 1968. At first, the band members' musical contributions were primarily limited to lead vocals and the occasional composition, with the remaining music provided by professional songwriters and studio musicians. Though this arrangement yielded multiple hit albums and singles, the band members revolted and, after a brief power struggle, gained full control over the recording process in 1967. For two albums, the Monkees mostly performed as a group; however, within a year, each member was pursuing his own interests under the Monkees' name, rendering the Monkees once again a group in name only. With widespread allegations that the band members did not play their own instruments—followed by the cancellation of The Monkees, diminishing success on the charts, and waning popularity overall—band members began to leave the group. The Monkees held a final recording session in 1970 before breaking up.
      
      A revival of interest in the Monkees came in 1986, prompting a 20th anniversary reunion. Over the following 35 years, the Monkees periodically reunited for reunion tours, a major-network television special, and new studio albums. Following Jones's death in 2012 and Tork's death in 2019, Dolenz and Nesmith embarked on a farewell tour in 2021. The tour ended shortly before Nesmith's death at the end of the year.`;
      bandFunction();
      break;

    case "Raiding the Rock Vault":
      bandImage = "Raiding the Rock Vault-6-17-13.png";
      bandName = "Raiding The Rock Vault";
      bandInfo = `Digital photo shown: This is Robin McAuley and Andrew Freeman. I, Bill Taylor took this with my iPhone at the show
      on 6-17-13 ... History: The concept for the show originated in 2011 with British record producer Simon Napier-Bell, who envisioned a touring rock supergroup playing covers of hit songs from the 1960s and 1970s. Napier-Bell joined with his longtime business partner, Harry Cowell, to produce the show. They enlisted John Payne, former lead singer of the band Asia, to help develop the idea. Interest in the concept soon faded, though, because the projected production costs were too high. Months later, Payne, inspired by his involvement with the touring production of Jeff Wayne's War of the Worlds, reimagined the concept as a theatrical production with a plot line that would tell the story of rock and roll in chronological order. Payne brought record producer David Kershenbaum on to co-write the script with him. Cowell financed the show for $1 million through his publicly traded production company, Papa Entertainment. Raiding the Rock Vault debuted on November 29, 2012, with a performance at the Mayan Theater in Los Angeles. That show was recorded to be shown to potential promoters for a concert tour. The feedback from promoters, however, suggested that the show would be well suited for Las Vegas. Cast member Paul Shortino arranged for the producers to meet with executives of the LVH – Las Vegas Hotel and Casino, and a deal was quickly reached. The show opened in March 2013 at the LVH. Cowell fired Payne from the show in June 2014 because of an unspecified business dispute, shortly before the LVH came under new ownership and became the Westgate Las Vegas. Westgate owner David Siegel liked the show and asked to buy the rights to it, planning to rename it as Westgate Rocks; Cowell refused the offer. Uncertain about their standing at the Westgate, the producers accepted an offer to move to the Tropicana Las Vegas. Meanwhile, Payne filed a lawsuit claiming he was owed royalties and performance fees; it was eventually settled. The show closed at the Westgate in September 2014, and then reopened in November in the 1,100-seat theater at the Tropicana. In the interim, the show was revamped to remove material developed by Payne, including the narrative about the discovery of the "rock vault" in a Mayan temple. Instead, the songs were bracketed by comedy sketches portraying stories recalled by two fictional roadies from their years of touring with rock bands. A sister show, Raiding the Country Vault, featuring classic country music songs in a similar format, was launched by Cowell and Napier-Bell in Branson, Missouri in May 2016. The producers ended the run at the Tropicana in July 2016, because they were not able to consistently sell the 300 to 400 tickets per night needed to cover their costs. The show started a new run in March 2017 at the 650-seat Vinyl nightclub at the Hard Rock Hotel and Casino. To fit in the smaller venue, the comedy sketches were eliminated from the show, along with the "vault" prop that had previously sat at the center of the set. In 2017 and 2018, a second company of Raiding the Rock Vault appeared for limited engagements at the Starlite Theatre in Branson. Producers also had plans for a worldwide tour, and pop and Latin versions of the show. In December 2019, Raiding the Rock Vault played 3 shows in London, England. In January 2020, with the Hard Rock preparing to close for renovations, the show moved to Club 172 at the Rio casino hotel. After a two-year hiatus due to the COVID-19 pandemic, the show reopened at The Duomo, a new venue at the Rio. In 2023, the show announced it would move from the Rio to the Hard Rock Cafe at Showcase Mall. Cast: Notable musicians who have been part of the show's rotating lineup at some time include: Doug Aldrich, Dave Amato, Mark Boals, Blas Elias, Andrew Freeman, Tracii Guns, Todd Kerns, Howard Leese, Robin McAuley, Hugh McDonald, John Payne, Rowan Robertson, Jay Schellen, Paul Shortino, Johnny Solinger, Phil Soussan, Matt Starr`;
      bandFunction();
      break;

    case "Rolling Stones":
      console.log(`In Rolling Stones area, selected value is ${selectedValue}`);
      bandImage = "Rolling Stones.png";
      bandName = "Rolling Stones";
      bandInfo = `The Rolling Stones are an English rock band formed in London in 1962. Active across seven decades, they are one of the most popular and enduring bands of the rock era. In the early 1960s, the band pioneered the gritty, rhythmically driven sound that came to define hard rock. Their first stable line-up consisted of vocalist Mick Jagger, guitarist Keith Richards, multi-instrumentalist Brian Jones, bassist Bill Wyman, and drummer Charlie Watts. During their early years, Jones was the primary leader of the band. After Andrew Loog Oldham became the group's manager in 1963, he encouraged them to write their own songs. The Jagger–Richards partnership became the band's primary songwriting and creative force.
      
      Rooted in blues and early rock and roll, the Rolling Stones started out playing covers and were at the forefront of the British Invasion in 1964, becoming identified with the youthful counterculture of the 1960s. They then found greater success with their own material, as "(I Can't Get No) Satisfaction", "Get Off of My Cloud" (both 1965), and "Paint It Black" (1966) became international number-one hits. Aftermath (1966), their first entirely original album, is often considered to be the most important of their early albums. In 1967, they had the double-sided hit "Ruby Tuesday"/"Let's Spend the Night Together" and experimented with psychedelic rock on Their Satanic Majesties Request. By the end of the 1960s, they had returned to their rhythm and blues-based rock sound, with hit singles "Jumpin' Jack Flash" (1968) and "Honky Tonk Women" (1969), and albums Beggars Banquet (1968), featuring "Sympathy for the Devil" and "Street Fighting Man", and Let It Bleed (1969), featuring "You Can't Always Get What You Want" and "Gimme Shelter".
      
      Jones left the band shortly before his death in 1969, having been replaced by guitarist Mick Taylor. That year they were first introduced on stage as "the greatest rock and roll band in the world". Sticky Fingers (1971), which yielded "Brown Sugar" and "Wild Horses" and included the first usage of their tongue and lips logo, was their first of eight consecutive number-one studio albums in the US. It was followed by Exile on Main St. (1972), featuring "Tumbling Dice" and "Happy", and Goats Head Soup (1973), featuring "Angie". Taylor left the band at the end of 1974, and was replaced by Ronnie Wood. The band released Some Girls in 1978, featuring "Miss You", and Tattoo You in 1981, featuring "Start Me Up". Steel Wheels (1989) was widely considered a comeback album and was followed by Voodoo Lounge (1994). Both releases were promoted by large stadium and arena tours, as the Stones continued to be a huge concert attraction; by 2007, they had recorded the all-time highest-grossing concert tour three times, and they were the highest-earning live act of 2021. Following Wyman's departure in 1993, the band continued as a four-piece core, with Darryl Jones becoming their regular bassist, and then as a three-piece core following Watts' death in 2021, with Steve Jordan becoming their regular drummer. Hackney Diamonds, the band's first new album of original material in 18 years, was released in October 2023, becoming their fourteenth UK number-one album.
      
      The Rolling Stones' estimated record sales of more than 250 million make them one of the best-selling music artists of all time. They have won three Grammy Awards and a Grammy Lifetime Achievement Award. They were inducted into the Rock and Roll Hall of Fame in 1989 and the UK Music Hall of Fame in 2004. Billboard and Rolling Stone have ranked them as one of the greatest artists of all time.`;
      bandFunction();
      break;

    case "Scuzz Twittly":
      console.log(`In Scuzz Twittly area, selected value is ${selectedValue}`);
      bandImage = "Scuzz_Twittly.jpg";
      bandName = "Scuzz Twittly";
      bandInfo =
        'Scuzz Twittly says "Keep Yer Hands Off My PBR" ! Scuzz is a good ole boy and he loves his PBR !';
      bandFunction();
      break;

    case "Twisted Sister":
      console.log(`In Twisted Sister area, selected value is ${selectedValue}`);
      bandImage = "Twisted Sister.jpg";
      bandName = "Twisted Sister";
      bandInfo = `Twisted Sister was an American heavy metal band formed in 1972, originally from Ho-Ho-Kus, New Jersey, and later based on Long Island, New York. Their best-known songs include "We're Not Gonna Take It" and "I Wanna Rock", both of which were associated with music videos noted for their sense of slapstick humor.
      
      Twisted Sister evolved from a band named Silver Star, and experienced several membership changes before settling on the classic lineup of Jay Jay French (guitars), Eddie "Fingers" Ojeda (guitars), Dee Snider (lead vocals), Mark "The Animal" Mendoza (bass), and A. J. Pero (drums) in 1982. It was this lineup which recorded the band's first four albums. Twisted Sister's first two albums, Under the Blade (1982) and You Can't Stop Rock 'n' Roll (1983), were critically well-received and earned the band underground popularity. The band achieved mainstream success with their third album, Stay Hungry (1984), and its single "We're Not Gonna Take It", which was their only Top 40 hit on the Billboard Hot 100. Their next two albums, Come Out and Play (1985) and Love Is for Suckers (1987), did not match the success of Stay Hungry, and Twisted Sister disbanded in 1988.
      
      The band briefly reunited in the late 1990s before more permanently reforming in 2003. The band released two more albums: Still Hungry (2004), a rerecording of their third album, and the Christmas album, A Twisted Christmas (2006). Following Pero's death in 2015, the band embarked on a farewell tour and broke up again after completing the tour in 2016.
      
      Although Twisted Sister is often regarded as glam metal due to its use of makeup, Snider considers the term to be inappropriate. Twisted Sister is also ranked No. 73 among VH1's 100 greatest artists of hard rock.`;
      bandFunction();
      break;

    case "Van Halen":
      console.log(`In CKB area, selected value is ${selectedValue}`);
      bandImage = "Van Halen.jpg";
      bandName = "Van Halen";
      bandInfo = `Van Halen was an American rock band formed in Pasadena, California, in 1973. Credited with restoring hard rock to the forefront of the music scene, Van Halen was known for their energetic live performances and for the virtuosity of its guitarist, Eddie Van Halen. The band was inducted into the Rock and Roll Hall of Fame in 2007.
      
      From 1974 to 1985, Van Halen consisted of Eddie Van Halen, Eddie's brother, drummer Alex Van Halen, lead vocalist David Lee Roth, and bassist and vocalist Michael Anthony. Upon its release in 1978, the band's self-titled debut album reached No. 19 on the Billboard 200 and would sell over 10 million copies in the United States, achieving a Diamond certification by the Recording Industry Association of America (RIAA). By 1982, the band released four more albums: Van Halen II (1979), Women and Children First (1980), Fair Warning (1981), and Diver Down (1982), all of which have since been certified multi-platinum. By the early 1980s, Van Halen was among the most commercially successful rock acts. The album 1984, released in the eponymous year, was a commercial success with U.S. sales of 10 million copies and four successful singles. Its lead single, "Jump", was the band's only number one single on the Billboard Hot 100.
      
      In 1985, Roth left the band to embark on a solo career and was replaced by former Montrose lead vocalist Sammy Hagar. With Hagar, the group released four U.S. number-one, multi-platinum albums over the course of 11 years: 5150 in 1986, OU812 in 1988, For Unlawful Carnal Knowledge in 1991, and Balance in 1995. Hagar left the band in 1996 shortly before the release of the band's first greatest hits collection, Best Of – Volume I. Former Extreme frontman Gary Cherone replaced Hagar and recorded the commercially unsuccessful album Van Halen III with the band in 1998, before parting ways in 1999. Van Halen then went on hiatus until reuniting with Hagar in 2003 for a worldwide tour in 2004 and the double-disc greatest hits collection, The Best of Both Worlds. Hagar again left Van Halen in 2005. Roth returned in 2006, but Anthony was replaced on bass guitar by Eddie's son, Wolfgang Van Halen. In 2012, the band released their final studio album, A Different Kind of Truth, which was commercially and critically
      successful. It was also Van Halen's first album with Roth in 28 years and the only one to feature Wolfgang.
      
      As of March 2019, Van Halen is 20th on the RIAA's list of best-selling artists in the United States; the band has sold 56 million albums in the U.S. and more than 80 million worldwide, making them one of the best-selling groups of all time. As of 2007, Van Halen is one of only five rock bands with two studio albums to sell more than 10 million copies in the United States and is tied for the most multi-platinum albums by an American band. Additionally, Van Halen has charted 13 number-one hits on Billboard's Mainstream Rock chart. VH1 ranked the band seventh on its list of the "100 Greatest Hard Rock Artists". Eddie was diagnosed with cancer in 2001, and died of the disease on October 6, 2020. A month after his father's death, Wolfgang confirmed that Van Halen had disbanded.`;
      bandFunction();
      break;

    default:
      console.log("Choose a band");
      break;
  }
}

function bandFunction() {
  console.log(`The bandFunction function is being executed now`);

  const bandImgDiv = document.createElement("div");
  const bandImg = document.createElement("img");
  const c = document.createAttribute.src;

  const bandNameDiv = document.createElement("div");
  const bandNameH1 = document.createElement("H1");
  const bandNameText = document.createTextNode(bandName);

  const bandInfoDiv = document.createElement("div");
  const bandInfoP = document.createElement("p");
  const bandInfoText = document.createTextNode(bandInfo);

  const extraGraphicImg = document.createElement("img");

  bandImgDiv.classList.add("wrapper");
  bandImg.classList.add("band-image");
  bandNameDiv.classList.add("wrapper");
  bandNameH1.classList.add("band-name");
  bandInfoDiv.classList.add("wrapper");
  bandInfoP.classList.add("band-info");
  extraGraphicImg.classList.add("guitar-img");

  document.body
    .appendChild(bandImgDiv)
    .appendChild(bandImg)
    .setAttribute("src", bandImage);
  document.body
    .appendChild(bandNameDiv)
    .appendChild(bandNameH1)
    .appendChild(bandNameText);
  document.body
    .appendChild(bandInfoDiv)
    .appendChild(bandInfoP)
    .appendChild(bandInfoText);
  /*document.body.appendChild(extraGraphicImg).setAttribute("src", "images.jpg");*/
  /*.setAttribute("src", "3082_JuiceDrop.png");*/

  console.log(`bandImgDiv is ${bandImgDiv}`);
  console.log(`bandImg is ${bandImg}`);
  console.log(`bandImage is ${bandImage}`);
  console.log("");

  console.log(`bandNameDiv is ${bandNameDiv}`);
  console.log(`bandNameH1 is ${bandNameH1}`);
  console.log(`bandNameText is ${bandNameText}`);
  console.log(`bandName is ${bandName}`);
  console.log("");

  console.log(`bandInfoDiv is ${bandInfoDiv}`);
  console.log(`bandInfoP is ${bandInfoP}`);
  console.log(`bandInfo is ${bandInfo}`);
  console.log("");

  console.log(`extraGraphicImg is ${extraGraphicImg}`);
  console.log(`Extra Graphic Image is "3082_JuiceDrop.png"`);
}
