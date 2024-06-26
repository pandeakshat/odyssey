import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
        <CardFooter className="flex justify-between">
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
        <CardFooter className="flex justify-between">
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
        <CardFooter className="flex justify-between">
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
        <CardFooter className="flex justify-between">
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
        <CardFooter className="flex justify-between">
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
Except making the app for goal setting, which is a goal on its own, we have to figure out some simpler ones that are continous over time, better health and fitness, better financial well-being and more social and close life with people around me.
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
          <CardFooter className="flex justify-between">
            <a href="https://medium.com/@pandeakshat/odyssey-chapter-1-3-goal-setting-vision-creation-4e8cd6568b63" target="_blank"> <Button>Link</Button> </a>
          </CardFooter>
        </Card>
      )
    }