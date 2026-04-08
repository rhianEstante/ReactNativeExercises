# React Native — Exercise Repo

A complete set of hands-on exercises to master React Native in 2 weeks.
Work through them in order. Commit after every exercise.

---

## How to use this repo

1. Fork this repo to your GitHub account
2. Clone YOUR fork: `git clone https://github.com/YOU/rn-exercises.git`
3. Verify your remote: `git remote -v` — origin must point to YOUR repo
4. Create one folder per exercise: `exercise-01/`, `exercise-02/`, etc.
5. Commit after every exercise — don't batch them
6. Push regularly: `git push origin main`

---

## Progress

- [ ] Exercise 01
- [ ] Exercise 02
- [ ] Exercise 03
- [ ] Exercise 04
- [ ] Exercise 05
- [ ] Exercise 06
- [ ] Exercise 07
- [ ] Exercise 08
- [ ] Exercise 09
- [ ] Exercise 10
- [ ] Exercise 11
- [ ] Exercise 12
- [ ] Exercise 13
- [ ] Exercise 14
- [ ] Exercise 15
- [ ] Exercise 16
- [ ] Exercise 17
- [ ] Exercise 18
- [ ] Exercise 19
- [ ] Exercise 20
- [ ] Exercise 21
- [ ] Exercise 22
- [ ] Exercise 23
- [ ] Exercise 24
- [ ] Exercise 25
- [ ] Exercise 26
- [ ] Exercise 27
- [ ] Exercise 28
- [ ] Exercise 29
- [ ] Exercise 30

---

## Exercises

---

### Exercise 01 — Fork and push drill

The most important exercise in the entire repo. This is the exact sequence you need to run at the start of every exam. Practice it until it takes less than 5 minutes from memory.

**What to do:**
- Find any public repo on GitHub (e.g. `facebook/react-native`)
- Fork it to your own GitHub account
- Clone YOUR fork — not the original repo
- Make any small change to any file
- Commit and push to origin
- Open GitHub in your browser and confirm the commit is visible

**Why it matters:** Your exam failed because `origin` pointed to the teacher's repo and you had no write access. Forking first means `origin` always points to YOUR repo.

**Hint:** Run `git remote -v` immediately after cloning. The URL next to `origin` must contain your GitHub username, not anyone else's.

---

### Exercise 02 — Fix a broken remote

Simulate the exact exam mistake, then repair it. This builds the reflex to check and fix your remote before writing a single line of code.

**What to do:**
- Clone any repo directly without forking first
- Run `git remote -v` and observe that origin points to someone else's repo
- Create a fork of that repo on GitHub
- Fix the remote: `git remote set-url origin <your-fork-url>`
- Push a commit and verify it worked

**Why it matters:** Knowing how to fix a bad remote means even if you forget to fork first, you can recover in 30 seconds instead of losing your entire exam.

**Hint:** `git remote set-url origin <url>` is the single command that fixes everything. You don't need to delete the repo or re-clone.

---

### Exercise 03 — Docker shell exploration

Get comfortable with the Docker commands you'll use every day. These should become second nature.

**What to do:**
- Start your container: `docker-compose up`
- Get a shell inside it: `docker exec -it <container_name> bash`
- Run inside the container: `node --version`, `npm --version`, `npx expo --version`
- Stop the container and restart it cleanly
- Follow live logs with: `docker-compose logs -f`

**Why it matters:** If Metro bundler crashes or hot reload breaks, you need to know how to get inside the container and restart things without panicking.

**Hint:** Use `docker ps` to find the container name if you don't know it.

---

### Exercise 04 — Counter with history

Your first React hooks exercise. The goal is to understand that state updates are asynchronous and that you must never mutate state directly.

**What to do:**
- Display the current count on screen
- Add increment and decrement buttons
- Show a list of the last 5 values the count had
- Use `useState` for both the count and the history array
- Never push directly to the array — always use the setter function

**Why it matters:** Directly mutating state (`history.push(count)`) is one of the most common React bugs. The component won't re-render and your UI will be stale.

**Hint:** `setHistory(prev => [count, ...prev].slice(0, 5))` — spread the new value at the front, then trim to 5 entries.

---

### Exercise 05 — Fetch and display users

Build a component that loads real data and handles all three possible states: loading, success, and error. Missing any of the three states is an exam mistake.

**What to do:**
- Fetch from `https://jsonplaceholder.typicode.com/users` inside a `useEffect`
- Show an `ActivityIndicator` while the request is in flight
- Display the list of user names when the data arrives
- Show a readable error message if the fetch fails
- Define a proper `User` TypeScript type — no `any`

**Why it matters:** Every data-fetching component must handle loading, data, and error. Examiners check all three.

**Hint:** `if (!response.ok) throw new Error(...)` is essential. The `fetch()` function only throws on network failure — it does not throw on 404 or 500 responses. You must check `response.ok` yourself.

---

### Exercise 06 — Prop drilling + Context refactor

Experience the problem before you learn the solution. Build the tree with props first, observe the pain of drilling, then remove all of it with Context.

**What to do:**
- Build this component tree: `App → UserList → UserCard → UserName`
- Pass a `users` array all the way down using props at every level
- Get it fully working
- Create a `UserContext`
- Refactor: `UserList` and `UserCard` should no longer receive or pass `users` as a prop — only `UserName` reads from context

**Why it matters:** Context is the solution to prop drilling. You need to understand why it exists before it makes sense to use it.

**Hint:** `createContext()` → `Provider` wrapping the tree in `App` → `useContext(UserContext)` in `UserName`. The middle components become clean.

---

### Exercise 07 — Profile card component

Build a reusable card component that looks like a real mobile UI. The focus is on row layout with an avatar on the left and stacked text content on the right.

**What to do:**
- Accept props: `name`, `bio`, `followers`, `avatarUrl`
- Round avatar image (60×60, `borderRadius: 30` for a perfect circle)
- Name (bold) + bio + follower count stacked on the right
- The whole card is tappable — log to console on press
- Use `StyleSheet.create()` — no inline style objects anywhere

**Why it matters:** `StyleSheet.create()` validates your styles at build time and performs better than inline objects. Always use it.

**Hint:** Outer `TouchableOpacity` → inner `View` with `flexDirection: 'row'` → left `Image` → right `View` with `flexDirection: 'column'`.

---

### Exercise 08 — Search + filter list

Extend the fetch component from Exercise 05 with real-time search. The key principle: never store two copies of the same data in state.

**What to do:**
- Add a `TextInput` above the `FlatList`
- Filter by name or username as the user types
- Show "Showing X of 10 users" below the input
- Show a `ListEmptyComponent` when nothing matches the search
- `keyExtractor` must return a string — use `item.id.toString()`

**Why it matters:** `keyExtractor` returning a number instead of a string causes subtle bugs and React warnings. Always `.toString()`.

**Hint:** Keep the full `users` array in state. Derive `filteredUsers = users.filter(...)` on every render. Pass `filteredUsers` to `FlatList`. Never put the filtered results in their own state variable.

---

### Exercise 09 — App shell layout

Build the skeleton of a real mobile app using only `View`, `Text`, and `StyleSheet`. This exercise is entirely about how `flex: 1` distributes space.

**What to do:**
- Header bar: fixed height, title centered, back label on the left
- Content area: `ScrollView` that fills all remaining space
- Bottom bar: 3 equally-spaced tab labels
- No libraries, no navigation — pure layout only
- The layout must not break whether the content is very short or very long

**Why it matters:** `flex: 1` on the `ScrollView` is what makes it fill the space between header and tab bar. Without it, the content collapses to zero height.

**Hint:** The outer `View` needs `flex: 1`. The `ScrollView` needs `flex: 1`. Everything else sizes itself.

---

### Exercise 10 — 3-screen app with params

Build a real product browsing flow. Data moves forward through the app via navigation params — this is the pattern used in almost every real mobile app and almost every exam.

**What to do:**
- `HomeScreen`: list of 5 fictional products (name, price, description)
- Tap a product → `ProductDetailScreen` showing its full details
- `ProductDetailScreen` has a "Buy" button → `OrderConfirmScreen`
- `OrderConfirmScreen` shows the product name and a confirmation message
- Use `route.params` in both receiving screens

**Why it matters:** `navigation.navigate('Screen', { data })` and `route.params.data` is the most-tested navigation pattern. Know it cold.

**Hint:** Pass the full product object as a param rather than just an ID. In an exam, it's faster and avoids needing to re-fetch or re-find the item.

---

### Exercise 11 — Tab + Stack combo

Most real apps combine bottom tabs with stack navigation inside each tab. This nested navigator pattern is the most common structure in production apps.

**What to do:**
- Bottom tab navigator with two tabs: Home and Profile
- Home tab has its own stack: list screen + detail screen
- Profile tab is a single screen
- Tapping a list item navigates to the detail screen inside the same tab
- `NavigationContainer` appears only once, at the very top of the tree

**Why it matters:** Nested navigators confuse a lot of people. The key insight is that each tab can have its own independent navigation stack.

**Hint:** Create a `HomeStack` component using `createNativeStackNavigator()` and use it as the component for the Home tab. The tab navigator doesn't know or care what's inside it.

---

### Exercise 12 — Dynamic header title

A small but commonly tested pattern: using navigation params to customise the screen header dynamically instead of hardcoding it.

**What to do:**
- Pass a product name as a navigation param
- Display that param as the screen's header title
- Add a button in the header right area (just `console.log` on press)
- The title must update correctly when navigating to different products

**Why it matters:** Hardcoded header titles are a red flag in exam submissions. Showing dynamic headers demonstrates you understand how options work.

**Hint:** `options={({ route }) => ({ title: route.params.name })}` on the `Stack.Screen` definition — no `useEffect` needed.

---

### Exercise 13 — Pixel-perfect card

Build a card that looks like it came from a real design system. Multiple sub-sections, a colored badge pill, and two action buttons.

**What to do:**
- Left side: avatar circle (50×50)
- Right side: bold name, subtitle text, colored tag pill
- Bottom row: two equal-width action buttons side by side
- No libraries — only `View`, `Text`, `TouchableOpacity`, `StyleSheet`
- The layout must not break on very long names or very short bios

**Why it matters:** Clean, structured layouts show you understand flexbox properly. It's one of the most visible things an examiner sees.

**Hint:** Outer `flexDirection: 'row'`. Right `View` gets `flex: 1` so it fills remaining space. Bottom buttons each get `flex: 1` inside their own `flexDirection: 'row'` container.

---

### Exercise 14 — Responsive 2-column grid

Build a grid that adapts to any screen size. This pattern appears in product listings, photo galleries, and dashboards.

**What to do:**
- Display cards in 2 equal columns
- Each card is exactly half the screen width minus padding
- Works correctly on both small and large phones
- Use the `Dimensions` API
- Cards should have consistent height

**Why it matters:** Percentage-based widths don't work in React Native the way they do on the web. You need to calculate pixel values from the screen dimensions.

**Hint:** `const cardWidth = (Dimensions.get('window').width - 48) / 2` — the 48 accounts for outer padding on both sides and the gap between the two columns.

---

### Exercise 15 — Notification badge

A classic absolute positioning pattern used everywhere in mobile UI: a small badge that overlaps its parent element in the corner.

**What to do:**
- A bell icon (a `View` or a `Text` with a character)
- Red circular badge with a count number in the top-right corner
- The badge overlaps the icon — it does not sit beside it
- The parent `View` must not grow to accommodate the badge

**Why it matters:** Absolute positioning is how every notification badge, floating button, and overlay is built in React Native.

**Hint:** The parent `View` is already `position: 'relative'` by default. Badge: `position: 'absolute'`, `top: -6`, `right: -6`. The badge escapes the parent's normal flow entirely.

---

### Exercise 16 — useFetch custom hook

Extract your fetch logic into a reusable hook. Once you have this, any component can load any URL with a single line and get loading + error handling for free.

**What to do:**
- Create `useFetch(url)` that returns `{ data, loading, error }`
- It handles the full fetch lifecycle internally: request, loading state, error handling, cleanup
- Use it in at least 2 different components with different URLs
- The hook should re-fetch automatically if the URL prop changes

**Why it matters:** Custom hooks are how React Native developers share stateful logic without copying and pasting `useState` + `useEffect` blocks everywhere.

**Hint:** A custom hook is just a regular function whose name starts with `use` and that calls React hooks internally. No magic — just extraction of code you've already written.

---

### Exercise 17 — Full CRUD task list

Build a task manager that simulates all four operations. Since JSONPlaceholder is read-only, you'll fake the mutations with local state — a legitimate real-world pattern for optimistic UI updates.

**What to do:**
- Fetch 10 tasks from `https://jsonplaceholder.typicode.com/todos?_limit=10`
- Display in a `FlatList` with loading + error states
- Add a new task: it appears at the top of the list
- Delete a task: it's removed from the list
- Toggle a task complete/incomplete: it visually crosses out

**Why it matters:** Optimistic updates — updating the UI immediately without waiting for the server — make apps feel fast and responsive. The pattern is used everywhere.

**Hint:** For add: `setTasks(prev => [newTask, ...prev])`. For delete: `setTasks(prev => prev.filter(t => t.id !== id))`. For toggle: `setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))`.

---

### Exercise 18 — Auth context

Build a complete fake authentication flow driven entirely by Context. This pattern — where your navigation structure depends on auth state — is in almost every real app.

**What to do:**
- `AuthContext` with: `user` state, `login(email, pass)` function, `logout()` function
- `LoginScreen`: calls `login()`, navigates to Home on success
- `HomeScreen`: shows `user.email` and a logout button
- Logout clears `user` state and navigates back to Login
- The navigation stack changes automatically based on whether `user` is null or not

**Why it matters:** Combining Context with navigation is one of the most important patterns in React Native. It appears in almost every real project and many exams.

**Hint:** In `App.tsx`: `const { user } = useContext(AuthContext); return user ? <AppStack /> : <AuthStack />;` — the Context value drives the entire navigation structure.

---

### Exercise 19 — Registration form with validation

Build a complete sign-up form with field-level validation. Each field must show its own specific error, not a generic message at the top.

**What to do:**
- Fields: name, email, password, confirm password
- Validate on submit: all fields required, valid email format, passwords match, password min 8 characters
- Show an inline error message directly under each failing field
- Clear a field's error as soon as the user starts typing in that field again
- Only proceed with submit when all validation passes

**Why it matters:** Field-level validation with targeted error messages is what separates a professional form from a basic one. Examiners notice this.

**Hint:** Keep errors as an object: `{ name: '', email: '', password: '', confirm: '' }`. On `onChangeText` for each field, clear just that field's error: `setErrors(prev => ({ ...prev, email: '' }))`.

---

### Exercise 20 — Multi-step form

A 2-step form where Step 1 must be valid before Step 2 is accessible. All data is preserved when navigating back.

**What to do:**
- Step 1: name and email with validation
- Step 2: password and confirm password
- Next validates Step 1 before allowing progress
- Back returns to Step 1 without losing any entered data
- Submit on Step 2 logs all 4 collected values
- Show which step the user is on: "Step 1 of 2"

**Why it matters:** Multi-step forms are a common exam pattern. The trick — keeping all state at the top level — is not obvious until you've seen it.

**Hint:** All 4 field state variables live at the top level — never inside the step components. A single `step` number controls which step renders. This is why data survives going back.

---

### Exercise 21 — Persist user preferences

Build a settings screen where preferences survive app restarts. This is the full AsyncStorage read-on-mount, write-on-change cycle.

**What to do:**
- Dark mode toggle and font size selector (3 options: small, medium, large)
- Both values persist to `AsyncStorage` whenever they change
- On app restart: load saved preferences before rendering the main UI
- Show a loading screen while preferences are being read from storage
- Fall back to sensible defaults when nothing is saved yet

**Why it matters:** Persistent user preferences are in almost every real app. The pattern — null initial state means "not loaded yet" — is reused everywhere.

**Hint:** Use `null` as the initial state for your preferences object. In `App.tsx`, render a loading spinner when preferences is `null`, and render the real app once it's an object.

---

### Exercise 22 — Parallel dashboard

Fetch three independent data sources simultaneously and display them all. This exercise demonstrates the real performance difference between sequential and parallel async operations.

**What to do:**
- Fetch from 3 different JSONPlaceholder endpoints at the same time
- A single loading spinner controls all 3 — shown until all requests complete
- Display all 3 results when everything has loaded
- If one request fails, show an error just for that section without breaking the others
- Add a Refresh button that re-fetches all 3 simultaneously

**Why it matters:** Sequential awaits (one after another) take N seconds. `Promise.all` takes the time of the longest single request. On a slow connection this is a massive difference.

**Hint:** Use `Promise.allSettled` instead of `Promise.all` — it never rejects and returns `{ status: 'fulfilled'|'rejected', value|reason }` for each request, so you can handle partial failures cleanly.

---

### Exercise 23 — Location display

Request the user's location and display it. Getting the permission handling right is more important than the coordinates themselves.

**What to do:**
- Request foreground location permission when the user taps a button (not automatically on mount)
- Show latitude and longitude when permission is granted
- If permission is denied, show a helpful message explaining why it's needed and how to enable it in Settings
- Add a Copy button that copies the coordinates to the clipboard
- Show a loading state while waiting for the GPS fix

**Why it matters:** Once a user denies a permission, calling request again silently does nothing. Your app must handle denial gracefully with a clear explanation.

**Hint:** `import * as Clipboard from 'expo-clipboard'; Clipboard.setStringAsync(\`\${lat}, \${lng}\`)` — works identically on iOS and Android.

---

### Exercise 24 — Avatar picker

Let users pick a profile photo from their library. Combines image picker, local state, and AsyncStorage for a complete real-world feature.

**What to do:**
- Show a round avatar placeholder displaying the user's initials
- Tapping the avatar opens the photo library
- The selected photo replaces the placeholder immediately
- The chosen image URI persists in `AsyncStorage`
- On next app launch, the saved avatar loads automatically

**Why it matters:** Combining multiple APIs (image picker + storage) into one cohesive feature is exactly what real-world and exam tasks look like.

**Hint:** `<Image source={{ uri: imageUri }} />` renders any local or remote URI. When `imageUri` is `null`, render the initials `View` instead. Always check for null before rendering `Image`.

---

### Exercise 25 — Memoize a list

See the re-render problem with your own eyes first, then fix it. The `console.log` approach makes the performance improvement concrete and measurable.

**What to do:**
- Build a `FlatList` with 200 items
- Add a counter button above the list (completely unrelated to the list data)
- Add `console.log('rendered:', item.id)` inside the list item — count the logs
- Tap the counter — observe how many items needlessly re-render
- Wrap the list item in `React.memo` AND wrap the handler in `useCallback`
- Tap the counter again — zero list items should re-render

**Why it matters:** On a list of 200 items, an unnecessary re-render does 200 times the work. On slower devices this causes visible jank.

**Hint:** `React.memo` without `useCallback` on the handler does nothing. Memo does a shallow comparison — if the handler prop is a new function reference every render (which it is by default), memo sees changed props and re-renders anyway.

---

### Exercise 26 — Search with useMemo

Replace a naive real-time filter with a memoized version and prove the filter only recomputes when it actually needs to.

**What to do:**
- Fetch 200+ items from JSONPlaceholder
- Real-time search filtering using `useMemo`
- Add an unrelated counter button — the filter must NOT recompute when you tap it
- Add `console.log('recomputing filter')` inside the `useMemo` callback to prove this
- Show the filtered result count

**Why it matters:** Without `useMemo`, filtering 200 items on every render (including unrelated renders) wastes CPU time. With `useMemo`, it only runs when the data or query actually changes.

**Hint:** `useMemo(() => { console.log('recomputing'); return items.filter(...); }, [items, query])` — the log fires only when `items` or `query` changes. Tapping the counter should produce no log.

---

### Exercise 27 — Social feed app

Your most complete project yet. This is the benchmark for exam readiness — if you can build this cleanly, you can handle the exam.

**What to do:**
- 3 screens: Feed (list of posts), Post Detail (full post + comments), Profile (user info)
- Data from a real API — JSONPlaceholder `/photos` for posts, `/users` for profiles
- `FlatList` with loading + error states on every data screen
- Context for liked posts, persisted to `AsyncStorage`
- Clean folder structure: `/screens`, `/components`, `/hooks`, `/context`, `/api`
- All fetch calls isolated inside the `/api` folder — no `fetch()` calls in components
- Commit every 30 minutes regardless of completion state

**Why it matters:** This is exam-level complexity. The folder structure and separation of concerns are as important as the features themselves.

**Hint:** Start with the `/api` layer — write the fetch functions first with no UI. Then build screens that call them. This makes the whole project easier to debug and the code review much cleaner.

---

### Exercise 28 — Timed simulation 1 (45 minutes)

Full exam conditions. No looking up the git workflow — it must come from memory. Build something real within the time limit.

**What to do:**
- Find a public React Native starter on GitHub
- Fork → clone YOUR fork → `git remote -v` → test push (5 minutes maximum)
- Build a list screen that fetches real data (FlatList + loading + error states)
- Build a detail screen reachable by tapping a list item
- Pass at least one param to the detail screen
- Push and verify on GitHub before time is up

**Why it matters:** Exam conditions are different from normal development. Time pressure exposes gaps in your workflow. The only way to prepare is to practice under the same conditions.

**Hint:** Navigation skeleton first — `HomeScreen` and `DetailScreen` with placeholder `Text`. Then add the fetch. A working app with simple UI beats a broken app with complex UI every time.

---

### Exercise 29 — Timed simulation 2 (35 minutes)

Harder constraints, less time. The focus is on committing regularly — partial commits show your work even if time runs out.

**What to do:**
- Different repo from Exercise 28
- Full git workflow from memory — no notes
- Add a search bar that filters the list in real time
- Commit every 10 minutes — set a timer on your phone
- Push whatever you have when time is up, even if incomplete

**Why it matters:** Commit history is visible to examiners even if your final app is incomplete. Regular commits with meaningful messages demonstrate a professional workflow.

**Hint:** `wip: add search filter` is a perfectly acceptable commit message under time pressure. Showing incremental progress is better than one large commit at the end.

---

### Exercise 30 — Final exam drill

One last run. The complete sequence. You have done this many times. This is confirmation that you are ready.

**What to do:**
- Fork → clone → build a 3-screen app with data fetching → push
- Setup under 5 minutes from memory
- Working app delivered under 45 minutes
- All 3 states present on every data screen: loading, error, data
- Push and verify on GitHub before stopping

**Exam day sequence — memorise this:**
```
1. Fork the teacher's repo on GitHub
2. Clone YOUR fork: git clone https://github.com/YOU/repo.git
3. Verify: git remote -v (origin must be YOUR URL)
4. Add upstream: git remote add upstream <teacher-url>
5. Test push: git commit --allow-empty -m "chore: setup" && git push origin main
6. Open GitHub and confirm the commit appears — then start coding
7. Commit every 20–30 minutes
8. Final push before the deadline
9. Open GitHub and confirm your commits are visible
```

**Hint:** Trust the process. You have built everything in this list. The checklist is just a safety net at this point.

---

## Suggested folder structure

```
rn-exercises/
  exercise-01/         ← notes or screenshots
  exercise-02/
  exercise-03/
  exercise-04/
    Counter.tsx
  exercise-05/
    Names.tsx
  exercise-06/
    App.tsx
    UserContext.tsx
  exercise-07/
    ProfileCard.tsx
  ...
  exercise-27/         ← social feed (full project)
    src/
      screens/
      components/
      hooks/
      context/
      api/
```

---
