import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

  import { ScrollArea } from "@/components/ui/scroll-area"


export function PreFace() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Preface</CardTitle>
          <CardDescription>Odyssey - Akshat Pande </CardDescription>
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
            <img src="odyssey.webp"></img>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Read</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[777 px]">
                    <DialogHeader>
                        <DialogTitle>Preface</DialogTitle>
                        <DialogDescription>
                            Odyssey - Akshat Pande
                        </DialogDescription>
                    </DialogHeader>
                    <p>
                    What is Odyssey? <br /><br />

Defined as a long wandering or voyage usually marked by many changes of fortune, odyssey, for me is incorporating certain core values that I have been ignoring or outsourcing due to lack of self-worth. It is also a way to write my own autobiography. Even though it will start from a certain time-period, it would have flashbacks, and that makes it much more beautiful, for me. 
<br /><br />
The Odyssey will be divided into multiple parts - the plan, the poem, the journal, and the status-window. The plan includes actionable steps that I will be working with, I have never properly made an actionable step-by-step plan for myself, and I want to try that, cause I have done it for others, efficiently. The poem is my core, I express the best through poetry, and I have been told that I write nicely, moving on, we have the journal, a simplified version of each day/week to go about in an adventure journal structure that will act as background information, actual history, and sometimes, just the filler. Finally, we have status-window, it is something I am working on to gamify my life and show progress in a more statistical way over-time. I will keep a database copy of all the stats so, its easier.
<br /><br />
The Odyssey is my autobiography written with intent and purpose and deciding the action plan to go to the next, life can still happen, however, we will plan again, and plan better. 
<br /><br />
Thank you, myself.

                                </p>
                    </DialogContent>
                </Dialog>
                </div>
                
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="https://medium.com/@pandeakshat/a-new-journey-odyssey-7d591afc95ab" target="_blank"> <Button>Link</Button> </a>
        </CardFooter>
      </Card>
    )
  }
  

  export function Begin() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>The Beginning (Poem) </CardTitle>
          <CardDescription>Odyssey - Akshat Pande </CardDescription>
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
            <img src="odyssey_thebeginning.webp"></img>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Read</Button>
                </DialogTrigger>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>The Beginning (Poem)</DialogTitle>
                        <DialogDescription>
                            Odyssey - Akshat Pande
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                    It starts with silence,<br />
                    neither deafening, nor loud,<br />
                    a comfortable silence,<br />
                    the silence of sunset,<br />
                    the silence of kindness,<br />
                    the silence of moonlight,<br />
                    the silence, that feels right.<br />
                    <br />
                    the chaotic thoughts had numbed down,<br />
                    the storm had passed through,<br />
                    the view though devastating, was serene,<br />
                    for a person obsessed with change,<br />
                    it was the Lego of dreams.<br />
                    <br />
                    Been trying to fill the gaps,<br />
                    with people, thoughts, and just actions to pass the time,<br />
                    the emptiness made it difficult to grow,<br />
                    it was a leakage in the essence, the soul,<br />
                    nobody, and nothing, could fit the gap,<br />
                    the shape never perfect, the size never the same,<br />
                    Because I had discarded my own existence to the side,<br />
                    not worthy of another look, or time,<br />
                    I forgot, the gap that was left, was only me,<br />
                    the only way to be complete, was to heal,<br />
                    the healing won’t be as good as new,<br />
                    but it would connect the way it was meant to be.<br />
                    To find a way to love myself,<br />
                    to find a way to just look at myself in the eyes and smile,<br />
                    to not yearn to pay attention to another life,<br />
                    the first step was to caress my own existence,<br />
                    to ask and comfort, my own mind.<br />
                    <br />
                    A weird feeling of being alone but not lonely,<br />
                    not looking at anyone for a chance or a try,<br />
                    an epiphany of the journey,<br />
                    a step, and two, to write my own destiny,<br />
                    and the life can happen, will happen,<br />
                    but the direction doesn’t change,<br />
                    it will just take another step to resume the game.
      </ScrollArea>
 
                    </DialogContent>
                </Dialog>
                </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="https://medium.com/@pandeakshat/odyssey-the-beginning-052dbe723967" target="_blank"> <Button>Link</Button> </a>
        </CardFooter>
      </Card>
    )
  }
 


  export function Chapterone() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Chapter 1: The Intro </CardTitle>
          <CardDescription>Odyssey - Akshat Pande </CardDescription>
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
            <img src="chapter-1.png"></img>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Read</Button>
                </DialogTrigger>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Chapter 1: The Intro</DialogTitle>
                        <DialogDescription>
                            Odyssey - Akshat Pande
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                    Once upon a time, as all stories begin with the dreams of a child, this one is a bit different. In a way, it started when all that made me a child ends, for most men, its with their death. However, for me, it is a way to find myself again.  In my experience, there are only two things that are infinite, stupidity and love, and I had both. <br /><br />

It is difficult for me to focus, I have had no passion or goals, I am without a vision for the future and no matter how I try it, I am never able to imagine myself in a place where I am happy by myself. I have not been able to visualise a time where I am content, at the same time, I have not been able to imagine a time where its just too miserable and something to run from. In my early days, I used to pride myself that I can adapt to pretty much anything, and I can be calm in almost any situation and plan and take actions accordingly, except in love, and in stupidity, everything else came down to that, which included my own existence. However that also means, I adapt, I do not have emotions and I do not have dreams, I have been adapting to pretty much everything my entire life, I do not understand what is right or wrong for me. <br /><br />

It helped me, I do not feel remorse or regret for my ability to adapt but given I had no dreams or vision and it was not focus, it was always adapting to what life threw at me, it did help me with survival for the early years, it helped me survive my teens and even when love and stupidity came in the way, I adapted in the end, like a switch, I adapted to reality and moved forward without hesitance. <br /><br />

Things changed though, as such the reason for this odyssey, I researched a lot about life, so many podcasts and motivational videos. The amount times I have asked ChatGPT about what to do, and even read through wikiHow links to understand, I came to one reality that was always there, I can only do so much alone, and business aside, career and everything separate, I was struggling with something on a different dimension entirely, I do think I have a good network and I have been helpful to almost everyone to the best of my capability, all these things that I have adapted to since childhood have also made toxic and led to my infinite struggle with relationships... internally. I am not close to my family, or friends, or loved ones, I am not attached to any of them, because attachment would lower my adaption rate and affect how I think I need to survive. Except... one, I have lost that too, but, I had one person who I could not adapt too, I have tried leaving more than a dozen times, even she did not keep a count so we dont know how many times I tried to adapt to a life without her, and in the most layman terms the love is defined, she was everything. I have been in love before, multiple times, I have been pushed to the edge, I have also tried to harm myself because of the pain, however, it is not the same, I have always had a switch when things went too bad, I left and came back, but at some point, I left without looking back again and going for someone else, it was different with her, I kept coming back to her, no matter who I was talking to or trying for, I came back to this one person, I could not adapt, and I could not imagine a life with her also, not in a bad or horrible way, in the same way I cannot visualise my own existence for the future with content or misery, I could not imagine or visualise how it would be with her, and finally, we have hurt each other enough, I have ruined her and she has ruined me, a lot of my worst moments are been with her, and some of the best too. Either way, as I started with, I have lost that too. <br /><br />

Hence, we come to this question, why this odyssey, and the answer is to find myself, I do not want to give up on me being able to adapt to pretty much anything, and also not how I am stuck with all the issues people have, the dopamine addiction, unable to focus or work, unable to visualise a future where i am content, or miserable and just going through life without understanding anything about anything. The person I lost told me, its too late, I am too late, and probably I am, and maybe even if she had given me a chance, I would have left again, that is how I have functioned because that is how I used to manage things, take myself out of the equation and adapt in isolation, and this may sound like a defence but it is just a defect I have grown up with and evolved around, I need to adapt to a new life and grow and change in a way that can take me to the next stage. <br /><br />

I am writing this in a bright room with all lights turned on but its dark outside, some grayish cloud in the horizon at it gets closer to sunrise, and we try to publish the first chapter of the odyssey, an introduction, a recap, how I would write it, how it would improve over time, and it is not even my first book in the end, so what is the table of contents, what is the flow and where does it end, the simple answer is i am not sure. I want to keep this real time and forever, the preface introduced a very positive version of it, the poem also on a similar note, this chapter filled with melancholy till now but will introduce some structure as it goes, I do not know how it would end, I cannot predict the future, but as I wrote before, I have lost one, and everything, the life is miserable by most standards and yet I dont feel the misery, I do feel inclination to end it all, but not in a its too much pain way, I am just not sure if it is worth it, but one of the best quote and an answer to someone who wants to die, you can always kill yourself tomorrow, and this odyssey will focus on today for a long time, till I naturally or unnaturally become nothing. <br /><br />

As mentioned before, the odyssey would have its own timeline, its not fixed, it does not follow a time frame of how we define life and society, it would be my own. This is an introduction, the beginning, where I have questioned my reality for the past months, tried to hold on to a way of living that I knew and lost everything in every aspect I could define in my mind. I have not lost everyone, but internally, its a storm that is breaking down what I am, and have been. I would hold onto a few things for sure, yet I do not want to make it the same as it was, this is an opportunity to build and write again. For me, as a writer and an over-thinker, I can define my own existence as a book that has been there for a long time, and recently even with all the scars the book had, it caught up in flames and there is not much I can save from what it has, so instead of trying to salvage what I can and build it from memory, which we all understand now that is personalised and can be filled with lies. I want to unwrap a new one, one which will have my past sprinkled in, like how this introduction only mentions what has been and the plan but not what the future contains, and maybe, write this one with intent and focus, and mix it not just with chapters containing words and emotions depicted through clever literature but how a life would be, a mix of everything, a mix of everything that makes me and my existence valid, a poetry, a project, a video, an adventure, and whatever else I find meaningful. It is an idea that I am trying to inculcate and define everything with. <br /><br />

Right now, everything is wrong, but bad times make strong men, and strong men make good times, and good times make weak men, and in my story, I have been all, I have been weak and strong, based on what I adapted to and what role I had to play, however, we will define our dreams along the way. This odyssey is mine. This chapter was an introduction, to showcase an understanding of why it exists and why it was essential and a basic background of my present. The next chapter would be a structure and the plan for how it would go, how I would define it, and my idea about it, it would use the best of what I am, and work on the worst what makes me me, from what the world teaches, and what the world hides, so many things to work on, a lifelong timeline. <br /><br />

Thank you.<br /><br />








      </ScrollArea>
 
                    </DialogContent>
                </Dialog>
                </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="https://medium.com/@pandeakshat/odyssey-the-beginning-052dbe723967" target="_blank"> <Button>Link</Button> </a>
        </CardFooter>
      </Card>
    )
  }
 
  
  export function Research() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Chapter 1.1: Research </CardTitle>
          <CardDescription>Odyssey - Akshat Pande </CardDescription>
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
            <img src="odyssey_research.png"></img>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Read</Button>
                </DialogTrigger>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Chapter 1.1: Research</DialogTitle>
                        <DialogDescription>
                            Odyssey - Akshat Pande
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                    I am back, at some point I started writing in third person and realised that I am trying to escape something, using we instead of I, at some point, I started considering myself always a part of something else when I am writing and that  is a bit creepy, I cant even explain properly how many times even during this small paragraph my first thought was starting it with we. I am going to work on it though, it is a new beginning after an end. 
<br /><br />
So what is this about? Why is this about? <br /><br />
After a long conversation with myself and listening to a friend share their experience, I realized that maybe in my current situation, I am deemed unforgivable and that is okay, I have asked for forgiveness and I have asked for trust, for a chance, and I have asked and apologized enough times, I have been pushed away, and I have been told multiple times how worse I am compared to other people. I am going to go back where I was a dead man with a heart beat, cruelly logical and still human but deliberately, and instinctually trustworthy with distanced involvement.
<br /><br />
Hence, today I will work on two different things. one is resolution or a vow, it is to respect myself and her, I do not understand and relate to her situation, and she cannot understand everything I am going through either, which is okay. I attempted communication and I was pushed way, so that is okay, if the only two responses you get for a dozen or more times is I don't know and leave me alone then at some time you just let go. That is one, a vow to respect her and myself and stay way. 
<br /><br />
Second, is do a proper research, I know for a fact that I am not going to be able to remember the previous content with the next one for Odyssey, as things keep happening, I will write but I will not able to make a flow out of it as things are broken into events and experiences in my life. So, I am not going to deal with it, I am going to focus on writing and just learning depending on events and experiences and work through a research based strategy for the next few days. Finally, I am going to figure out the flow in the end, it would be extra work however it would be good practice to work on and improve my writing.
<br /><br />
Now, the introduction for this section is over, we get to the main objective of this checkpoint, Research. A very basic research on redefine life gave me this actionable steps -
1. Self Reflection & Assessment -<br />
	-  Identify Dissatisfaction<br />
	-  Examine Your Values<br />
	-  Explore Your Passions<br /><br />
2. Goal-Setting and Vision Creation - <br />
	-  Define Your Ideal Life<br />
	-  Set SMART Goals<br />
	-  Visualize Your Future<br /><br />
3. Mindset Shifts -<br />
	-  Embrace Change<br />
	- Practice Self-Compassion<br />
	- Challenge Limiting Beliefs<br /><br />
4. Taking Action -<br />
	-  Build New Skills<br />
	- Create New Habits<br />
	- Network Strategically<br /><br />
5. Continual Evaluation and Refinement -<br />
	- Regularly Assess Progress<br />
	- Be Adaptable<br />
	- Embrace the Journey<br /><br />
Important Reminders -<br />
- Redefining your life is a personal journey.<br />
- A support system can be invaluable.<br />
- Change doesn't happen overnight, stay persistent!<br />



      </ScrollArea>
 
                    </DialogContent>
                </Dialog>
                </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="https://medium.com/@pandeakshat/chapter-1-1-research-e480093d8301" target="_blank"> <Button>Link</Button> </a>
        </CardFooter>
      </Card>
    )
  }

  export function SelfAssess() {
    return (
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Chapter 1.2: Self Assessment & Reflection </CardTitle>
          <CardDescription>Odyssey - Akshat Pande </CardDescription>
        </CardHeader>
        <CardContent>
            
            <div className="grid w-full items-center gap-4">
            <img src="odyssey_assess.png"></img>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Read</Button>
                </DialogTrigger>
                <DialogContent className="">
                    <DialogHeader>
                        <DialogTitle>Chapter 1.2: Self Assessment & Reflection</DialogTitle>
                        <DialogDescription>
                            Odyssey - Akshat Pande
                        </DialogDescription>
                    </DialogHeader>
                    <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                    Structure on its own is meaningless, an empty building serves no purpose, and an algorithm that's never used is never useful. So, we will go through the structure and our research and write about it. Step by step, every single point and outline our thought process and our experience on the same.
                    <br /><br />
Starting off with self reflection and assessment, to realise where I stand, who I am right now, what am I going through and just keep referencing the past and keep it till today, not trying to figure out where it goes, no projection, a self reflection is always just a tiny bit behind your current moment, so let's start with it.
<br /><br />
The first part of that is, identifying dissatisfaction, and it makes literal sense, there should be a reason for change while it could be through external factors or it can be due to internal struggles or a mixture of both, depending on how we generally interact with our existence and surroundings and how we hope to do it. For me, I am lost and aimless in general, I have not had a goal or passion for a long time, even though I'm good at a lot of things and I am quick to learn, I do get lost in a month or so, because I achieve those short term requirements in that timeframe. A best friend of mine said she's into men who are driven and have a goal and it makes sense to me but that's when I questioned myself, where does my drive go? What do I actually want in life? Still haven't found it but that's one factor of dissatisfaction, I'm aimless and lost, and that's okay. Another one in similar is that I'm not able to evaluate my worth, it led to other issues with self image, self worth and people pleasing, while I go through a lot at times the one thing I find the most annoying for myself to myself is I forgive others easily, no matter what they do and how they are, I just let go of the situation and move on, and just understand and sympathise and just go towards the next one. While it's a good quality in some regards as I don't hold onto grudges and let it affect my life continuously, at the same time, i need boundaries. One more factor is relationship, I'm single and I don't like being that, I love having a companion in life as it helps with two of the other factors, I can outsource my goals to theirs and just work to be able to match up. Another one would be self image issues, companion help with that as they'll appreciate me and I won't have to figure that part out as I'll spend most of my time with my person and finally they'll protect me too. Hehe, anyway, i want to become more attractive because recently it feels nobody wants me or nobody wants to deal with me and i am a plague they have to avoid, and i hope it's not that and it's just my mind and pessimism trying to get away from it. However, that's still something I need to work on, I need to do things to make these factors less apparent, as I think, Hormozi said, if you're doubting your own worth then act and build yourself and surround with undeniable proofs as why those things are not what they are. At the same time, work on my perceptions. That's three dissatisfaction that I could come up with on the top of my head, that means these thoughts are consistent inside my mind, they exist perpetually and are going round and round and that's not good for my mental health, so another dissatisfaction, 4 in total.
<br /><br />
Let's part of self assessment and reflection is examine your values. I have to understand what it means by values first, just so it's clear, for me, values are just some guidelines I hold to be true, a way of living or thinking that makes sense to me and I wish for the world and society to be in a similar manner, a simple one to start with is growth, I don't know when and how I instilled this value into my being, however after that, it's easier to live, on a comparative basis. Growth is just change but with improvement, a bit more every day and every moment in a way preferred to oneself. Another value of mine is to trust on instinct, it's always better to trust and regret rather than judge people from the get to, there are exceptions ofcourse and also you don't trust people with everything, don't be dumb about it but at the same time, don't think everyone has a negative or pessimistic motive behind their actions and start with thinking they are good in general, it makes life easier, atleast it has for me, or I've just been lucky and that's good too. Next value would be to help others with whatever you're capable of and not everything they need or everything you deem them worthy of, don't control what you can do based on your preferences or don't overdo or over commit to solve problems entirely, I've made that mistake before. However, I do like helping everyone, the most that I can, and it feels good at most times.
I do think that's most of my values that I live with, there are more values that I find good and want to incorporate them on a regular basis, however they are not a part of me right now, so waiting and working on it.
<br /><br />
The last part of self reflection and assessment according to the given framework is explore your passions, things that you find fulfilling or what gives you a flow state, understand the reasoning behind it and what it accomplishes for you. As an example, everyone I know has been in a flow state Doom scrolling social media, while still a flow state, it's not the most helpful and growth oriented activity for most individuals, it's not as rewarding either.
<br /><br />
A growing passion maybe? Not sure, I have consulted and coached on temporary basis for friends for short term issues but haven't researched or trained in either so not really sure about it. However, I'll discuss some of my own passions that I've dealt with before, the primary passion I have is writing, it's a very simple activity but it assists me to outline my thoughts in a structured manner, it does help in expressing and improves language and grammar of th same. I'm passionate about gaming also, exploring campaigns, competing against other people and winning sometimes, playing with friends and vibing, there's not a lot to worry about. However it does consume a lot of time and it's best features involve making isolated groups from a larger group. 
<br /><br />

      </ScrollArea>
 
                    </DialogContent>
                </Dialog>
                </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <a href="https://medium.com/@pandeakshat/chapter-1-1-research-e480093d8301" target="_blank"> <Button>Link</Button> </a>
        </CardFooter>
      </Card>
    )
  }
    //   <ScrollArea className="h-343 w-777 rounded-md border">
    //     <div className="p-4">
    //     </div>
    //   </ScrollArea>
 

    export function Visualize() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 1.3: Goal-Setting and Vision Creation </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_visualize.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>Chapter 1.3: Goal-Setting and Vision Creation</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      Goal-Setting and Vision Creation - <br />
	1. Define Your Ideal Life<br />
	2. Set SMART Goals<br />
	3. Visualize Your Future<br />
  <br />
  The second stage of this research is goal setting and vision creation. As going back to my childhood, the most common statement I have heard is to focus on a goal and go towards it and everything will work out accordingly. While with my ADHD that I just found out, it makes sense that it was difficult for me to stick to one goal and it kept changing overtime and over life, even though I understood the importance and how essential it is, it was difficult to process the same. Moreover, due to my self worth issues, I have never seen or dreamt of a better life, like I do want it to get better, I will work for it to get better but there is no end goal for me to aim for, there is no way for me to know what ideal looks like, I can adapt to pretty much anything and everything so everything becomes ideal, however I want to focus on the opposite, A way to figure out what is not possible and what is not acceptable, and maybe refuse to struggle a bit and not enjoy it. I am not too sure about it, I do love chaos becomes it makes thing simple and I have just let my demons take over, as there is no point in holding them back anymore, I dont know how I will live from now on. I just know the key to calm these demons is out there, and maybe one day it will be alright, or i will live like this till the day I die, neither of it is an issue, I adapt either way, I hope and wish for one but I will survive somehow anyway.
  <br /><br />
So, the first part of this is define your idea life. To start it off, it should be remote work, maybe my own business, or a really good job, not sure exactly how to pan it out but it would be a way that I can travel the entire world and enjoy life and try new things, meet new people, talk to so many and just enjoy. I like playing games and hanging out with the boys so would love that too, just being able to spend time with them and take my car out and drive around to a Mcdonalds near midnight and just keep going and have fun. A lot of it revolves around freedom, financial, physical, emotional, and more. So, that is something I can look forward to, try to look and yearn for freedom and take actions to attain it, I will apply for better and more remote jobs from today, make another proper attempt and redefining my life, we have a lot of projects that we are working on and that could assist with the future that i need to make, I can always run a business with myself in this. However, it is difficult for me to define and imagine what ideal is, but meditation does help so we will train in that and try to refine my thoughts to focus on visualizing how a day looks like when I have attained all that is possible. The ideal life does not require to be grandiose in any form, people have different dreams and mine is relatively simple and bleak but it makes me happy, so that is enough, ideal life should be happy for the least.
<br /><br />
The second part is set SMART goals. I had to google this for the full form, and it is just defined as Specific, Measurable, Achievable, Relevant, and Time Bound. It does seem a pretty reasonable method to define goals, a specific goal would make it easier for you to decide your end state, the measurable part is to define progress and can keep you motivated and on the pathway as you improve over time, achievable is a no-brainer as it should be able to be completed to be a proper reasonable goal, the relevant part is more subjective because it would depend on the person right? I dont think there is a global standard for relevancy and even if there is, it would be difficult to conform to everyone's opinion, so maybe relevant to the individual and his requirements/ beliefs. and the final is time bound, as we have a few behaviour laws regarding the importance of deadlines. I forgot the name if it was Murphy, or someone else who outlined that your work would spread out based on your deadline, which has stood true for me not for years now. However it does make proper sense to me. Coming towards setting SMART goals, means you have to brainstorm goals while keeping this specific attributes in line, the best way to do it is make an app for it, and that is what we will do, easy.
<br /><br />
Except making the app for goal setting, which is a goal on its own, we have to figure out some simpler ones that are continuous over time, better health and fitness, better financial well-being and more social and close life with people around me.
<br /><br />
Moving forward, the worst part of this stage is visualizing life and that would require immense focus and motivation at the same time. With my ADHD and difficult to keep my mind on one topic or do one thing at a time anyway, it is difficult to visualize a better life, adding on with my negligible self worth, and just growth mindset which goes with iterative changes make it more difficult over time to focus on things like visualization. Now, I do want to get better at that and use flow state more often, as I have had experiences before and it could deem useful for my goals and more.
<br /><br />
So, the actionable steps for this stage is to learn and practice meditation, it would be easier to visualize and then we work on the application to solve our own problem for goal setting and also turn it into a goal itself as a software product, I will use different kinds of protocols over the SMART one but it is reasonable to use all of it. Finally, I am not sure what my ideal life is right now, while freedom is the theme for it, we have to do a lot to get to a point where it becomes clearer.
<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }



    export function Mindshift() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 1.4: Mindset Shifts </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_mindshift.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>Chapter 1.4: Mindset Shifts</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      Mindset Shifts - <br />
1. Embrace Change<br />
2. Practice Self-Compassion<br />
3. Challenge Limiting Beliefs<br />
<br /><br />
The stages are pretty scary and honestly, I have not started working on them properly, though the next stage is taking action so we will just brain storm the current stage and then bring all the actions later. The current and also the third stage of the research is Mindset Shifts. I love this topic, the amount of times I have told people to work on their mindset is crazy, even though I suck at them by myself and I have tried to incorporate them over-time. Moreover, there is this video on Youtube called mindshift, its a classic motivational video but, it is my favorite, the six minutes were it talks about nothing changes until you change your mind, and there is no limit to human will as long as you are able to change your mind towards a future where you can achieve it, and it does make sense to me, there are a lot of different concepts that have been discussed based on the same underlying structure. Manifestation, Law of Attraction, are the classic few that are the most famous and used that work on mindset, there also exists the idea of fake it till you make it is signaling your brain how you want your future and your present to be, which makes you to decide accordingly, and not be dreaming and only visualizing without actually taking steps towards it. The mindset shifts stage is pretty simple to talk about, difficult to act on, and extremely exhausting to continue with depending on where you stand right now. 
<br /><br />
The first stage is embrace change. Change is inevitable, it could be through our own actions and how we want to go forward so we make changes in our life, so voluntary changes, or it could be involuntary changes, adapting to changes in scenarios, the world making you to change your directions, acting or changing with the society, it is difficult to point out all the influences that can bring about change in a person’s journey and trajectory but it is there. So, embrace change works on the similar concept, just let it come, any change that happens voluntarily or involuntarily should not affect your trajectory by a huge margin, and it also includes incorporating changes into growth and improving your vision and actions. The beauty of life and all the free-wills of very individual clashing is you cannot map out your future step by step, you can strategize and plan, but it is all probabilities and trying for the best outcome. That is the reason it is important to embrace change and include that into your strategy, if something new turns out, see how you can include it and make most out of it, if something goes to shit, think about how you can make changes in your current plan to avoid the worst case scenario. Simple as that.
<br /><br />
The first stage is honestly simple for me, as I do value growth so it works out. However, the second stage is self compassion. treat yourself well, make sure you are taking care of yourself and the self talk is made up of hopeful thoughts towards yourself too, it is a foreign concept to me even though I try my best, basically when your strategy goes bad, dont make yourself a failure or a loser and just make a better strategy while talking bad to yourself the entire time like oh should have been more smart about it, why couldnt you even consider such a simple thing, so on and so forth. Self-compassion is more necessary on difficult journeys because you are on your own critic and supporter, there should be a balance in both for sure but the support should be more than the critic as you have to go further, not stay where you are right now, it is not keeping things as they are, its growing and improving, so the positive input should be more. Moreover, I am struggling with forgiving myself right now, so that is also a thing to work on, but yeah more support than criticism during the internal monologue.
<br /><br />
The last one, is challenging limiting beliefs, which we all have, through built up trauma or insecurities over time or just because we have not tried something or stopped adventuring the unknown over-time we just dont try, the risk aversion takes over and we dont really explore what the world has to offer, or even what we can do. All of this incorporates into limiting beliefs, even while you are working on something, the self talk can taker over and you jsut give up projects half way or stop doing them because you feel less and like its not helping anyone. I have been in that situation more times that I can remember and that is alright, it is important to embrace change and work on self-compassion also. it is good to try, and it is okay to fail, the most important thing as rocky said, was to stand up again, it does not matter how many times you fall, as long as you have the strength and courage to stand up again, you will win, maybe not at one thing, maybe not at everything, but in life, when it ends, you will be know that you never stopped trying, and maybe that is enough.
<br /><br />
The mindset shifts is important to keep your mind aligned with what your future holds, it builds the foundation that will take you to the end, it helps you to take actions, and not just start with them but keep on taking the actions required to keep going forward, it starts with one step but to walk and get somewhere, the steps need to keep happening and you need strength in your legs and in your mind to take the next step even if you dont know where you are going. In a similar analogy, if you are lost in the forest, you can only take steps, and its three directions, one is give up, which is no-no. The other one is to trace back where you came from, and decide the future ahead, and the last is, keep walking, if you are lost, you will be lost in the next moment too, and the moment after, but if you keep taking steps and evaluate your position, at some point, you will find yourself, not sure how it would turn out, life is unpredictable but if you are embracing change and you are your own supporter, you will find a way out of it, and even if it is end of it all, you will know you kept trying till the last moment.
<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }

    export function Action() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 1.5: Taking Action </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_action.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>Chapter 1.5: Taking Action</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      Taking Action - <br />
1. Build New Skills<br />
2. Create New Habits<br />
3. Network Strategically<br />
<br /><br />
The next step in this odyssey for me is taking action. Thought without action is well just being there, like meditation but you do not do anything once you feel refreshed, calm, and at peace. It is rewarding in its own way as you separate yourself from the flow of life and sometimes it is important to just distance yourself from the world and look at what path you are going at, reflect, and understand. But it is consider an action too, as you are choosing to do that to reflect and improve your trajectory. The only example I have in my mind is swimming? or even if it is in a boat on the ocean, if you do not take action, you have no control over your life, and you will just go with the flow, your wants or needs dont matter, you do not have a say in things, and you cant even stop properly as you have become part of a storm you have no control over at the same point, it is so easy to start escaping, action. Change, voluntary change, requires action, and a lot of other things but it does start with action. So that is what this stage is about, taking actions and a guideline on what to look for, for me.
<br /><br />
The first step is to build new skills, or you can also refine and improve your current skills but given i was not entirely happy about my current existence, it is more towards building new skills to find purpose, while refining what i have, as outlined in the passions. So, why focus on new skills and not just work on existing ones for improvement? Well, because your limiting beliefs and experiences are there with your existing skillset, no matter how much we want to improve sometimes, we are reminded of all our failures and it is difficult to swim through them and get to the other side. While tryin something new, taking actions can give you the initial propulsion to go, okay I can get better at things, and then use that acceleration to not just learn something new that aligns with the future you want, but also refine your other skills as you have the mindset and proof that there is improvement, and it is possible. The skills that I would go for would obviously depend on the vision I have, and it would be different for someone else. Some primary ones that are required from me is networking and adventuring. There are others that require refinement but I dont know how to network and it is a skill, i do have a lot of people I know and I am probably in network of others but it is different for something to exist by happenstance and something to be used as a skill, its same for adventuring, I have stopped enjoying what the world has to offer, so do that. I have not gone on solo trips for the longest time, and I have not even done anything remotely on my own to be honest. I am always around people and just go with what they want? what do I want though? what do i enjoy? I enjoy everything, I think. As long as other people are enjoying it, and that is just sad in its own way. So, the plan is to start adventuring. Move towards a better future, move towards something that is more rewarding and precise. But yeah, those are the skills that I know of right now, there would be more that require attention along the way, but that is for a different chapter, and a different time. 
<br /><br />
For now, the next stage, habits. Now it does say create new habits because I put it as my life was horrible, nothing, so I had nothing to go for, and some new habits would be necessary ofcourse. There is a popular quote from the book atomic habits, you do not rise up to your goals but you fall down to your systems/habits. It is pretty simple, at the start of a race, everyone has the same goal, to win the race, but it is the individual habits of the people involved that result in their position at the end, is your habit to work out on your endurance and strength every single day? or is it just to dream about getting to the finish line? do you take care of your body? do you diet well? do you sleep well? do you enjoy the run? or do you jsut want to win because its cool? there are a lot of different things, but if your habits are properly aligned towards your future then they work as propulsion themselves, like that was one hack i liked, i dont have any goals or vision as mentioned before, but if i build and work on habits that work as propulsion in an approximate direction, I would be improving over time, no matter the scenario. So, build new habits, make them a core part of your existence and just be disciplined with how it goes. I have ADHD so I may suck at a lot of different things but the one thing that ADHD does not affect is habits, it just makes it really difficult to build them, so. That is good? I guess.
<br /><br />
This last point is going to be a mixture of what skill I want to learn, network strategically. it is important though, human beings are supposed to live in community, and there is only so much we can achieve alone, and sadly it does not have to be in positive way only, network strategically does not mean, make friends with everyone, but understand your needs and your requirements and steps you need to take for a future that aligns with what you want, that is were strategy comes in, and network is just the people you contact with based on what you need, not what they need or what you can do for them, its dark, but that is the reality of life, you can be altruistic and you can do right by everyone you network with, however it should be based on strategy and the strategy should be for your life.
<br /><br />
All in all, it is simple, take actions, a step, a word, an e-mail, no matter how small or big, it is to start. There is another quote, motivation is a result of action, not the reason for it. You do require discipline and vision to take action, to believe in it, but not motivation and inspiration. So,  that is it, simple, clear, take action.
<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }


    export function Evaluate() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 1.6: Continual Evaluation and Refinement </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_evaluate.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>Chapter 1.6: Continual Evaluation and Refinement</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      Continual Evaluation and Refinement - <br />
1. Regularly Assess Progress<br />
2. Be Adaptable<br />
3. Embrace the Journey<br />
<br /><br />
Now to the last stage of our research and structure before the story actually begins. Its funny in a way that it has been so long since the first initial release of the preface and the idea to this. I still have to design so much and work on so many things before I can properly say that my odyssey begins today. It is me though and we are working on changing that, this stage is all about making sure we stick to it. Simplified into continual evaluation and refinement with assessing progress, adapting, and embracing the journey.
<br /><br />
To start it off, the assessing progress takes into account the habits and skills built over time and the change in scenarios. Currently, I am going through a lot of frequent changes so, over-all it should be incorporate nicely. The assessment is required so you can see how far you have come from where you started off with, and it helps in building your support and for self compassions. It is important to not let it make you complacent and stop though, the journey is endless till the last breath, and that is why habits are necessary so it keeps going on and not just oh look how far i have come, this is good enough. I do not want to stop. For this, I am building a status-window application which is gamification of the current life, I have tried it before, but we are going to improve the design and make sure it aligns with out requirements and research. 
<br /><br />
The next stage is be adaptable,  easy peasy, just make sure how life comes, you are able to go with it, not it becomign an obstacle that destroys everything, but you adapt and improve, incorporate the changes in to your current system to be more resilient to the future and what it could bring along. I consider myself pretty good with adapting, but it is an important skill to learn as life hits you with so many things that can make you hopeless at times, and it has done to me, been so close to giving, but it has worked out for now. I am alive, and I do think a lot of it has to do with adapting with the world and myself and my own thought process.
<br /><br />
Embrace the journey, enjoy it, live it, talk about it. Embracing journey may feel similar to embracing change but it is more like enjoy the ride kind of thing, it is to enjoy the process of things, to just vibe with it while you do everything else, it does not include actions, it does not talk about skills or habits or anything else, in a way it is jsut to be thankful and grateful to life and to be able to get better over-time, to just have fun, enjoy new places, or food, or people, embrace what ever the journey offers and be grateful because you are able to feel that, enjoy even the hardships because it will lead to better days, the happiness of pursuit.
<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }



    export function Reminder() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 1.7: Important Reminders </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_reminder.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>Chapter 1.7: Important Reminders</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      … Redefining your life is a personal journey.<br />

… A support system can be invaluable.<br />

… Change doesn’t happen overnight, stay persistent.<br />
<br /><br />
There will be more important reminders as I go on, it is a continuous journey starting from now. However, I will learn more so i will have more reminders to keep in mind to not forget where I am and how I am. The research and structure is over, the initial one, not the first one I will have and not the last one either, new things may add on as i experience life, and some things may be removed as they feel useless at times or for what's required.
<br /><br />
Thank you. Let’s live.<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }


    export function Failure() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>The Failure (Poem) </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_failure.webp"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle>The Failure (Poem)</DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      I consider myself a failure, <br />
At career, at love, at life, at being alive,<br />
A failure to keep my friend close,<br />
A failure to maintain my soul,<br />
I have lost everything, and i managed to lose more,<br />
As I face death in the last moments, i despair more,<br />
It’s alright, I don’t deserve to smile,<br />
I don’t deserve to live, I don’t deserve to cry,<br />
I’m not worth a chance, I’m not worth the rain,<br />
It’s just all pain, and a hell to live in,<br />
That’s even a blessing for this scarred cursed essence of mine.<br />
Yet why does my heart try to scream,<br />
Why does my mind finds hope and ideas to dream,<br />
Why does when i lose everything, i tend to hold on to the edge,<br />
What am I waiting for, no love, no money, nobody to choose me, no career,<br />
I’m lost and broken, i failed and ruined more,<br />
I’m so tired to breathe, I’m so tired to keep my eyes open at any time,<br />
What’s the use of it all, the over the edge is welcoming me,<br />
It’ll be so easy to end it all, and die…<br />
Yet I can’t, everything becomes heavy and refuses to move<br />
I don’t know what’s left in this life for me.<br />
I still refuse to leave<br />
I don’t care about revenge<br />
I don’t care about everything lost in time,<br />
I don’t have anything I want to be<br />
Hollow empty husk, struggling to breathe but not letting out even this time…<br /><br />

Do I deserve to be reborn, do I deserve another life?<br />
I don’t know, it’s not for anyone else but for me to decide,<br />
I do want so many things as I pass by,<br />
A dream that lasts just one blink of an eye<br />
Yet I’ve never worked on it properly,<br />
Never worked on myself at any time,<br />
Why would I? I hate myself,<br />
My love was outsourced every single time,<br />
Yet with all the failures and all the defeats, I still try,<br />
Those dreams that last only a moment,<br />
The plans that are always on my mind,<br />
Only I never follow through as I lose to myself every time,<br />
I am wondering what to do, speculating what to do this time,<br />
I don’t have the right to love anymore, and now I feel more lost,<br />
What am I? Who am I? What’s there in life?<br />
I am so lost and it’s so empty and it hurts,<br />
What’s there for me? What does life show me in time?<br />
I am tired, and exhausted, and I have lost everyone who’s close,<br />
a person of convenience, and last priority, as it is easier that way,<br />
there is no efforts required, to keep me,<br />
I come with no requirements, hence I am worthless, as I am free,<br />
A failure, a loser, a lost soul, no checkpoint for me to go to,<br />
No way for me to grow, I am unhappy, I feel distraught,<br />
Start over again? A new campaign? New character to unlock?<br />
Maybe a failure again, maybe I will lose it all,<br />
I’d like to win atleast once,<br />
I’d like to look at myself and feel sure of my own,<br />
I’d like to stand infront of the mirror, or some video call,<br />
and not escape my own eyes or judgement of them,<br />
I want to talk to me and say, we have done it.<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="https://medium.com/@pandeakshat/a-failure-cb37673f6ad3" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }
   

    
    export function Canvas() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Chapter 2: Empty Canvas of a Failure </CardTitle>
            <CardDescription>Odyssey - Akshat Pande </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src="odyssey_canvas.png"></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle> Chapter 2: Empty Canvas of a Failure </DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      <br />

This is the beginning of another life. The Odyssey is a new journey and honestly speaking the recent events did make me feel like a big failure. I have failed at education, career, love, family, friends, almost anything and everything. I am not horrible at it, I just am way below average, and at everything? I do pass sometimes just to barely get through but that is still a failure because it is straight across the board, so its worse right? if I had one thing going right for me, I can still go, alright, this is what I am amazing it, cream of the crop as they say. However, given how things are, I do consider myself a failure, even with mental health and physical health, its been bad. I dont want it to be like that though? I want it to be better, and I cannot win at everything, I do understand that, it does not mean I want to just gulp it down and give up entirely. I am anxious all the time, I feel alone and depressed, I even have regular suicidal tendencies, but the concept of tomorrow helps. So, where does it bring me for this odyssey, it is a new journey, self reflection, embracing change, mindset, action and evaluation, I do want it to bring a change in me that will make the life ahead better. I do not want to be a failure, I do not want to feel like this, so aligning with the quote, you can have more than you got because you can become more than you are. I want to truly believe in that now. Hence, it brings to the first story of my odyssey, over the preface, the plan, the hope, the structure, this is the first arc of mine, “Empty Canvas of a Failure”. The thought process behind it is pretty simple, I do consider myself a failure, and I am changing a lot, I am giving up on everything I was, no matter what it is, and I am starting a new, from nothing. Even if it exists online, or in my life, for myself, for my story, I am nothing, and I will start from the scratch for it all. However, as I am my own artist and writer and designer, i have a canvas, still a failure though but every stroke, every color, every new thing I add would slowly change it, would slowly add on to be more than what i was, to not be a failure, from what I am.
<br /><br />
From an empty canvas of a failure to a story and arc that makes me more? I dont know what it will be, I dont know what habits and skills I would like, how would I be perceived as and what is the end point of the arc, it is there though, it is beginning now. 
<br /><br />
For presentation of the empty canvas of a failure, I will be redesigning odyssey with a new website, new way to interact with it and better artwork and such. I will also include more visual elements into it, a way to read poetry and such. It is simple, redesign odyssey website, redesign and restructure status-window for update, new project line and queue for building up portfolio and other skills, and maybe more. I will share everything as it goes, find my own music, find my own rhythm, and find my own colors. Its scary but exciting. Happiness of Pursuit.
<br /><br />
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="/ " target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }
    
    export function Example2() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle> </CardTitle>
            <CardDescription> </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src=" "></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle> </DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      
  
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="/ " target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }
    






    export function Example3() {
      return (
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle> </CardTitle>
            <CardDescription> </CardDescription>
          </CardHeader>
          <CardContent>
              
              <div className="grid w-full items-center gap-4">
              <img src=" "></img>
              <Dialog>
                  <DialogTrigger asChild>
                      <Button variant="outline">Read</Button>
                  </DialogTrigger>
                  <DialogContent className="">
                      <DialogHeader>
                          <DialogTitle> </DialogTitle>
                          <DialogDescription>
                              Odyssey - Akshat Pande
                          </DialogDescription>
                      </DialogHeader>
                      <ScrollArea className="h-[500px] w-[444px] rounded-md border p-4 overflow-auto">
                      
  
        </ScrollArea>
   
                      </DialogContent>
                  </Dialog>
                  </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <a href="/ " target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }