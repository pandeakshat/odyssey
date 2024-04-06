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
 



  
  
    //   <ScrollArea className="h-343 w-777 rounded-md border">
    //     <div className="p-4">
    //     </div>
    //   </ScrollArea>
 