import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-xl font-bold", className)}
    {...props}
  />
));

DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 bg-black/60", className)}
    {...props}
  />
));

DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-base leading-6", className)}
    {...props}
  />
));

DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "rounded-lg  max-w-xl w-[90vw] fixed top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2",
        className
      )}
      {...props}
    />
  </DialogPortal>
));

DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex -mx-6 px-6 gap-x-3 items-center mt-4 justify-end",
      className
    )}
    {...props}
  />
));

DialogFooter.displayName = "DialogFooter";

function DialogContentBasic({
  title,
  leadingNode: LeadingNode,
  children,
  description,
  className,
  ...props
}) {
  return (
    <DialogContent className={cn("p-6", className)} {...props}>
      {title && (
        <div className="flex gap-x-3 items-center">
          {LeadingNode && <LeadingNode />}
          <DialogTitle>{title}</DialogTitle>
          {!LeadingNode && (
            <DialogClose className="ml-auto">
              <Cross1Icon />
            </DialogClose>
          )}
        </div>
      )}
      {description && (
        <DialogDescription className="mt-2">{description}</DialogDescription>
      )}
      {children}
    </DialogContent>
  );
}

function DialogContentBordered({
  leadingNode,
  children,
  className,
  title,
  ...props
}) {
  return (
    <DialogContent className={cn("px-6 pb-4", className)} {...props}>
      {title && (
        <div className="-mx-6 px-6 gap-x-3 py-3.5 border-b flex items-center">
          {leadingNode}
          <DialogTitle>{title}</DialogTitle>
          {!leadingNode && (
            <DialogClose className="ml-auto">
              <Cross1Icon />
            </DialogClose>
          )}
        </div>
      )}
      {children}
    </DialogContent>
  );
}

function DialogOutSideClose({ className, children, ...props }) {
  return (
    <DialogContent className={cn("p-6", className)} {...props}>
      <button className="right-0 -top-12 absolute w-9 h-9 rounded-md bg-white flex items-center justify-center">
        <Cross1Icon />
      </button>
      {children}
    </DialogContent>
  );
}

function DialogFooterBordered({ className, ...props }) {
  return <DialogFooter className={cn("pt-4 border-t", className)} {...props} />;
}

export {
  Dialog,
  DialogTrigger,
  DialogTitle,
  DialogPortal,
  DialogOverlay,
  DialogDescription,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogContentBasic,
  DialogContentBordered,
  DialogFooterBordered,
  DialogOutSideClose,
};
