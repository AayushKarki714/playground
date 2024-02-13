"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContentBasic,
  DialogContentBordered,
  DialogFooter,
  DialogFooterBordered,
  DialogOutSideClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cross1Icon } from "@radix-ui/react-icons";

const Button = React.forwardRef(
  ({ intent = "primary", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn("px-6 py-2 bg-blue-500 text-white rounded-md", className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default function Home() {
  return (
    <div>
      <section>
        <h2>Basic</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 1</Button>
            </DialogTrigger>
            <DialogContentBasic title="Here is the thing">
              <div className="pt-4">
                <div>here goes the dynamic content</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi modi nulla sit sunt saepe voluptates illo blanditiis
                  temporibus non voluptatum, pariatur voluptatem libero dolores
                  aliquam dolor odio provident iusto maiores?
                </p>
              </div>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 2</Button>
            </DialogTrigger>
            <DialogContentBasic title="Title" leadingNode={LeadingNode}>
              <div className="pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Provident officia incidunt molestiae voluptate possimus. Ratione
                esse reiciendis repellat ipsam quidem earum quod, magni
                inventore provident eligendi possimus soluta sint cupiditate?
              </div>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 3</Button>
            </DialogTrigger>
            <DialogContentBasic title="Title">
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quae animi earum, mollitia deserunt voluptatum
                  accusamus laboriosam sapiente exercitationem dolore blanditiis
                  repudiandae dicta. Similique ea saepe blanditiis
                  necessitatibus totam velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus error qui mollitia nobis incidunt
                  necessitatibus molestiae non temporibus soluta vel blanditiis
                  quibusdam sunt deserunt, ipsa, quidem aspernatur ducimus vero?
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-6 py-2  rounded-md">Cancel</button>
                </DialogClose>
                <button className="px-6 py-2 bg-blue-500 rounded-md text-white">
                  Save
                </button>
              </DialogFooter>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 4</Button>
            </DialogTrigger>
            <DialogContentBasic title="Title" leadingNode={LeadingNode}>
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quae animi earum, mollitia deserunt voluptatum
                  accusamus laboriosam sapiente exercitationem dolore blanditiis
                  repudiandae dicta. Similique ea saepe blanditiis
                  necessitatibus totam velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus error qui mollitia nobis incidunt
                  necessitatibus molestiae non temporibus soluta vel blanditiis
                  quibusdam sunt deserunt, ipsa, quidem aspernatur ducimus vero?
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-6 py-2  rounded-md">Cancel</button>
                </DialogClose>
                <button className="px-6 py-2 bg-blue-500 rounded-md text-white">
                  Save
                </button>
              </DialogFooter>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 5</Button>
            </DialogTrigger>
            <DialogContentBasic>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quae animi earum, mollitia deserunt voluptatum
                  accusamus laboriosam sapiente exercitationem dolore blanditiis
                  repudiandae dicta. Similique ea saepe blanditiis
                  necessitatibus totam velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus error qui mollitia nobis incidunt
                  necessitatibus molestiae non temporibus soluta vel blanditiis
                  quibusdam sunt deserunt, ipsa, quidem aspernatur ducimus vero?
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-6 py-2  rounded-md">Cancel</button>
                </DialogClose>
                <button className="px-6 py-2 bg-blue-500 rounded-md text-white">
                  Save
                </button>
              </DialogFooter>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 6</Button>
            </DialogTrigger>
            <DialogContentBasic
              title="Title"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,"
            >
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quae animi earum, mollitia deserunt voluptatum
                  accusamus laboriosam sapiente exercitationem dolore blanditiis
                  repudiandae dicta. Similique ea saepe blanditiis
                  necessitatibus totam velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus error qui mollitia nobis incidunt
                  necessitatibus molestiae non temporibus soluta vel blanditiis
                  quibusdam sunt deserunt, ipsa, quidem aspernatur ducimus vero?
                </p>
              </div>
            </DialogContentBasic>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 7</Button>
            </DialogTrigger>
            <DialogContentBasic
              title="Title"
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,"
            >
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores quae animi earum, mollitia deserunt voluptatum
                  accusamus laboriosam sapiente exercitationem dolore blanditiis
                  repudiandae dicta. Similique ea saepe blanditiis
                  necessitatibus totam velit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum possimus error qui mollitia nobis incidunt
                  necessitatibus molestiae non temporibus soluta vel blanditiis
                  quibusdam sunt deserunt, ipsa, quidem aspernatur ducimus vero?
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <button className="px-6 py-2  rounded-md">Cancel</button>
                </DialogClose>
                <button className="px-6 py-2 bg-blue-500 rounded-md text-white">
                  Save
                </button>
              </DialogFooter>
            </DialogContentBasic>
          </Dialog>
        </div>
      </section>
      <section>
        <h2>Bordered</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 1</Button>
            </DialogTrigger>
            <DialogContentBordered title="Title">
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  a reiciendis blanditiis mollitia odit architecto eaque, odio
                  officiis ea nobis alias! Doloremque hic at obcaecati nisi
                  voluptas ipsum et enim?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, hic? Distinctio dolor harum saepe neque alias illum
                  eveniet qui doloremque sapiente voluptate maiores quidem
                  quisquam magni, iste molestias accusamus sit?
                </p>
              </div>
            </DialogContentBordered>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 2</Button>
            </DialogTrigger>
            <DialogContentBordered title="Title" leadingNode={<LeadingNode />}>
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  a reiciendis blanditiis mollitia odit architecto eaque, odio
                  officiis ea nobis alias! Doloremque hic at obcaecati nisi
                  voluptas ipsum et enim?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, hic? Distinctio dolor harum saepe neque alias illum
                  eveniet qui doloremque sapiente voluptate maiores quidem
                  quisquam magni, iste molestias accusamus sit?
                </p>
              </div>
            </DialogContentBordered>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 3</Button>
            </DialogTrigger>
            <DialogContentBordered title="Title is the key">
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  a reiciendis blanditiis mollitia odit architecto eaque, odio
                  officiis ea nobis alias! Doloremque hic at obcaecati nisi
                  voluptas ipsum et enim?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, hic? Distinctio dolor harum saepe neque alias illum
                  eveniet qui doloremque sapiente voluptate maiores quidem
                  quisquam magni, iste molestias accusamus sit?
                </p>
              </div>
              <DialogFooterBordered>
                <Button>Cancel</Button>
                <Button>Save</Button>
              </DialogFooterBordered>
            </DialogContentBordered>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 4</Button>
            </DialogTrigger>
            <DialogContentBordered leadingNode={<LeadingNode />} title="Title">
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  a reiciendis blanditiis mollitia odit architecto eaque, odio
                  officiis ea nobis alias! Doloremque hic at obcaecati nisi
                  voluptas ipsum et enim?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, hic? Distinctio dolor harum saepe neque alias illum
                  eveniet qui doloremque sapiente voluptate maiores quidem
                  quisquam magni, iste molestias accusamus sit?
                </p>
              </div>
              <DialogFooterBordered>
                <Button>Cancel</Button>
                <Button>Save</Button>
              </DialogFooterBordered>
            </DialogContentBordered>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 5</Button>
            </DialogTrigger>
            <DialogContentBordered title="Title">
              <div className="pt-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                  a reiciendis blanditiis mollitia odit architecto eaque, odio
                  officiis ea nobis alias! Doloremque hic at obcaecati nisi
                  voluptas ipsum et enim?
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolore, hic? Distinctio dolor harum saepe neque alias illum
                  eveniet qui doloremque sapiente voluptate maiores quidem
                  quisquam magni, iste molestias accusamus sit?
                </p>
              </div>
              <DialogFooterBordered>
                <Button>Cancel</Button>
                <Button>Save</Button>
              </DialogFooterBordered>
            </DialogContentBordered>
          </Dialog>
        </div>
      </section>
      <section>
        <h2>Dialog Outside Close</h2>
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Dialog 1</Button>
            </DialogTrigger>
            <DialogOutSideClose>
              <figure className="w-full aspect-video bg-gray-600"></figure>
            </DialogOutSideClose>
          </Dialog>
        </div>
      </section>
    </div>
  );
}

function LeadingNode() {
  return (
    <button>
      <Cross1Icon />
    </button>
  );
}
